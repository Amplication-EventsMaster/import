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
import { BlackfridayApplywebApplicationController } from "../blackfridayApplywebApplication.controller";
import { BlackfridayApplywebApplicationService } from "../blackfridayApplywebApplication.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  applywebApplicationId: 42,
  id: 42,
  studentId: 42,
};
const CREATE_RESULT = {
  applywebApplicationId: 42,
  id: 42,
  studentId: 42,
};
const FIND_MANY_RESULT = [
  {
    applywebApplicationId: 42,
    id: 42,
    studentId: 42,
  },
];
const FIND_ONE_RESULT = {
  applywebApplicationId: 42,
  id: 42,
  studentId: 42,
};

const service = {
  createBlackfridayApplywebApplication() {
    return CREATE_RESULT;
  },
  blackfridayApplywebApplications: () => FIND_MANY_RESULT,
  blackfridayApplywebApplication: ({ where }: { where: { id: string } }) => {
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

describe("BlackfridayApplywebApplication", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: BlackfridayApplywebApplicationService,
          useValue: service,
        },
      ],
      controllers: [BlackfridayApplywebApplicationController],
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

  test("POST /blackfridayApplywebApplications", async () => {
    await request(app.getHttpServer())
      .post("/blackfridayApplywebApplications")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /blackfridayApplywebApplications", async () => {
    await request(app.getHttpServer())
      .get("/blackfridayApplywebApplications")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /blackfridayApplywebApplications/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/blackfridayApplywebApplications"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /blackfridayApplywebApplications/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/blackfridayApplywebApplications"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /blackfridayApplywebApplications existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/blackfridayApplywebApplications")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/blackfridayApplywebApplications")
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
