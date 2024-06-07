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
import { NewCourseController } from "../newCourse.controller";
import { NewCourseService } from "../newCourse.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  courseNum: "exampleCourseNum",
  courseSection: "exampleCourseSection",
  department: "exampleDepartment",
  departmentCode: "exampleDepartmentCode",
  id: 42,
  shortTitle: "exampleShortTitle",
  title: "exampleTitle",
  units: 42,
};
const CREATE_RESULT = {
  courseNum: "exampleCourseNum",
  courseSection: "exampleCourseSection",
  department: "exampleDepartment",
  departmentCode: "exampleDepartmentCode",
  id: 42,
  shortTitle: "exampleShortTitle",
  title: "exampleTitle",
  units: 42,
};
const FIND_MANY_RESULT = [
  {
    courseNum: "exampleCourseNum",
    courseSection: "exampleCourseSection",
    department: "exampleDepartment",
    departmentCode: "exampleDepartmentCode",
    id: 42,
    shortTitle: "exampleShortTitle",
    title: "exampleTitle",
    units: 42,
  },
];
const FIND_ONE_RESULT = {
  courseNum: "exampleCourseNum",
  courseSection: "exampleCourseSection",
  department: "exampleDepartment",
  departmentCode: "exampleDepartmentCode",
  id: 42,
  shortTitle: "exampleShortTitle",
  title: "exampleTitle",
  units: 42,
};

const service = {
  createNewCourse() {
    return CREATE_RESULT;
  },
  newCourses: () => FIND_MANY_RESULT,
  newCourse: ({ where }: { where: { id: string } }) => {
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

describe("NewCourse", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: NewCourseService,
          useValue: service,
        },
      ],
      controllers: [NewCourseController],
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

  test("POST /newCourses", async () => {
    await request(app.getHttpServer())
      .post("/newCourses")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /newCourses", async () => {
    await request(app.getHttpServer())
      .get("/newCourses")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /newCourses/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/newCourses"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /newCourses/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/newCourses"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /newCourses existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/newCourses")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/newCourses")
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
