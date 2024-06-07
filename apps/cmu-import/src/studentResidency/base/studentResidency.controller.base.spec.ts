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
import { StudentResidencyController } from "../studentResidency.controller";
import { StudentResidencyService } from "../studentResidency.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: 42,
  residencyDate: new Date(),
};
const CREATE_RESULT = {
  id: 42,
  residencyDate: new Date(),
};
const FIND_MANY_RESULT = [
  {
    id: 42,
    residencyDate: new Date(),
  },
];
const FIND_ONE_RESULT = {
  id: 42,
  residencyDate: new Date(),
};

const service = {
  createStudentResidency() {
    return CREATE_RESULT;
  },
  studentResidencies: () => FIND_MANY_RESULT,
  studentResidency: ({ where }: { where: { id: string } }) => {
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

describe("StudentResidency", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: StudentResidencyService,
          useValue: service,
        },
      ],
      controllers: [StudentResidencyController],
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

  test("POST /studentResidencies", async () => {
    await request(app.getHttpServer())
      .post("/studentResidencies")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        residencyDate: CREATE_RESULT.residencyDate.toISOString(),
      });
  });

  test("GET /studentResidencies", async () => {
    await request(app.getHttpServer())
      .get("/studentResidencies")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          residencyDate: FIND_MANY_RESULT[0].residencyDate.toISOString(),
        },
      ]);
  });

  test("GET /studentResidencies/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/studentResidencies"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /studentResidencies/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/studentResidencies"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        residencyDate: FIND_ONE_RESULT.residencyDate.toISOString(),
      });
  });

  test("POST /studentResidencies existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/studentResidencies")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        residencyDate: CREATE_RESULT.residencyDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/studentResidencies")
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
