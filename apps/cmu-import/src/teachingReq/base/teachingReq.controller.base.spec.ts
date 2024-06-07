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
import { TeachingReqController } from "../teachingReq.controller";
import { TeachingReqService } from "../teachingReq.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  complete: "true",
  courseNum: "exampleCourseNum",
  courseSection: "exampleCourseSection",
  date: new Date(),
  departmentCode: "exampleDepartmentCode",
  id: 42,
  pending: "true",
  status: "exampleStatus",
  title: "exampleTitle",
  units: "exampleUnits",
};
const CREATE_RESULT = {
  complete: "true",
  courseNum: "exampleCourseNum",
  courseSection: "exampleCourseSection",
  date: new Date(),
  departmentCode: "exampleDepartmentCode",
  id: 42,
  pending: "true",
  status: "exampleStatus",
  title: "exampleTitle",
  units: "exampleUnits",
};
const FIND_MANY_RESULT = [
  {
    complete: "true",
    courseNum: "exampleCourseNum",
    courseSection: "exampleCourseSection",
    date: new Date(),
    departmentCode: "exampleDepartmentCode",
    id: 42,
    pending: "true",
    status: "exampleStatus",
    title: "exampleTitle",
    units: "exampleUnits",
  },
];
const FIND_ONE_RESULT = {
  complete: "true",
  courseNum: "exampleCourseNum",
  courseSection: "exampleCourseSection",
  date: new Date(),
  departmentCode: "exampleDepartmentCode",
  id: 42,
  pending: "true",
  status: "exampleStatus",
  title: "exampleTitle",
  units: "exampleUnits",
};

const service = {
  createTeachingReq() {
    return CREATE_RESULT;
  },
  teachingReqs: () => FIND_MANY_RESULT,
  teachingReq: ({ where }: { where: { id: string } }) => {
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

describe("TeachingReq", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: TeachingReqService,
          useValue: service,
        },
      ],
      controllers: [TeachingReqController],
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

  test("POST /teachingReqs", async () => {
    await request(app.getHttpServer())
      .post("/teachingReqs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        date: CREATE_RESULT.date.toISOString(),
      });
  });

  test("GET /teachingReqs", async () => {
    await request(app.getHttpServer())
      .get("/teachingReqs")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          date: FIND_MANY_RESULT[0].date.toISOString(),
        },
      ]);
  });

  test("GET /teachingReqs/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/teachingReqs"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /teachingReqs/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/teachingReqs"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        date: FIND_ONE_RESULT.date.toISOString(),
      });
  });

  test("POST /teachingReqs existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/teachingReqs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        date: CREATE_RESULT.date.toISOString(),
      })
      .then(function () {
        agent
          .post("/teachingReqs")
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
