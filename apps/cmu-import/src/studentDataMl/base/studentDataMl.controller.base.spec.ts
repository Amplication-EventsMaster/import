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
import { StudentDataMlController } from "../studentDataMl.controller";
import { StudentDataMlService } from "../studentDataMl.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  origDepartment: "exampleOrigDepartment",
  overrideCore: "true",
  overrideElectives: "true",
};
const CREATE_RESULT = {
  id: "exampleId",
  origDepartment: "exampleOrigDepartment",
  overrideCore: "true",
  overrideElectives: "true",
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    origDepartment: "exampleOrigDepartment",
    overrideCore: "true",
    overrideElectives: "true",
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  origDepartment: "exampleOrigDepartment",
  overrideCore: "true",
  overrideElectives: "true",
};

const service = {
  createStudentDataMl() {
    return CREATE_RESULT;
  },
  studentDataMls: () => FIND_MANY_RESULT,
  studentDataMl: ({ where }: { where: { id: string } }) => {
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

describe("StudentDataMl", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: StudentDataMlService,
          useValue: service,
        },
      ],
      controllers: [StudentDataMlController],
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

  test("POST /studentDataMls", async () => {
    await request(app.getHttpServer())
      .post("/studentDataMls")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /studentDataMls", async () => {
    await request(app.getHttpServer())
      .get("/studentDataMls")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /studentDataMls/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/studentDataMls"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /studentDataMls/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/studentDataMls"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /studentDataMls existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/studentDataMls")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/studentDataMls")
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
