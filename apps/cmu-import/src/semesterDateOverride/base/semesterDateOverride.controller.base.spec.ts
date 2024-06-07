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
import { SemesterDateOverrideController } from "../semesterDateOverride.controller";
import { SemesterDateOverrideService } from "../semesterDateOverride.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  department: "exampleDepartment",
  id: 42,
  semrefId: 42,
  year: 42,
};
const CREATE_RESULT = {
  department: "exampleDepartment",
  id: 42,
  semrefId: 42,
  year: 42,
};
const FIND_MANY_RESULT = [
  {
    department: "exampleDepartment",
    id: 42,
    semrefId: 42,
    year: 42,
  },
];
const FIND_ONE_RESULT = {
  department: "exampleDepartment",
  id: 42,
  semrefId: 42,
  year: 42,
};

const service = {
  createSemesterDateOverride() {
    return CREATE_RESULT;
  },
  semesterDateOverrides: () => FIND_MANY_RESULT,
  semesterDateOverride: ({ where }: { where: { id: string } }) => {
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

describe("SemesterDateOverride", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: SemesterDateOverrideService,
          useValue: service,
        },
      ],
      controllers: [SemesterDateOverrideController],
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

  test("POST /semesterDateOverrides", async () => {
    await request(app.getHttpServer())
      .post("/semesterDateOverrides")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /semesterDateOverrides", async () => {
    await request(app.getHttpServer())
      .get("/semesterDateOverrides")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /semesterDateOverrides/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/semesterDateOverrides"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /semesterDateOverrides/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/semesterDateOverrides"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /semesterDateOverrides existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/semesterDateOverrides")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/semesterDateOverrides")
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
