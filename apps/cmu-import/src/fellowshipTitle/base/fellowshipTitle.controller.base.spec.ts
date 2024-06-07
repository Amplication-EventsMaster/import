import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { FellowshipTitleController } from "../fellowshipTitle.controller";
import { FellowshipTitleService } from "../fellowshipTitle.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  department: "exampleDepartment",
  fellowshipTitle: "exampleFellowshipTitle",
  id: 42,
};
const CREATE_RESULT = {
  department: "exampleDepartment",
  fellowshipTitle: "exampleFellowshipTitle",
  id: 42,
};
const FIND_MANY_RESULT = [
  {
    department: "exampleDepartment",
    fellowshipTitle: "exampleFellowshipTitle",
    id: 42,
  },
];
const FIND_ONE_RESULT = {
  department: "exampleDepartment",
  fellowshipTitle: "exampleFellowshipTitle",
  id: 42,
};

const service = {
  createFellowshipTitle() {
    return CREATE_RESULT;
  },
  fellowshipTitles: () => FIND_MANY_RESULT,
  fellowshipTitle: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("FellowshipTitle", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: FellowshipTitleService,
          useValue: service,
        },
      ],
      controllers: [FellowshipTitleController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /fellowshipTitles", async () => {
    await request(app.getHttpServer())
      .post("/fellowshipTitles")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /fellowshipTitles", async () => {
    await request(app.getHttpServer())
      .get("/fellowshipTitles")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /fellowshipTitles/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/fellowshipTitles"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /fellowshipTitles/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/fellowshipTitles"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /fellowshipTitles existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/fellowshipTitles")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/fellowshipTitles")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
