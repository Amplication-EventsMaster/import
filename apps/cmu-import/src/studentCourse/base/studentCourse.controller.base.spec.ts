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
import { StudentCourseController } from "../studentCourse.controller";
import { StudentCourseService } from "../studentCourse.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  applicable: "exampleApplicable",
  courseNum: "exampleCourseNum",
  courseSection: "exampleCourseSection",
  customLabel: "exampleCustomLabel",
  date: new Date(),
  departmentCode: "exampleDepartmentCode",
  grade: "exampleGrade",
  id: 42,
  midtermGrade: "exampleMidtermGrade",
  note: "exampleNote",
  qpoints: 42.42,
  requirementType: "exampleRequirementType",
  shortTitle: "exampleShortTitle",
  studentId: 42,
  title: "exampleTitle",
  transfercredit: 42,
  units: "exampleUnits",
};
const CREATE_RESULT = {
  applicable: "exampleApplicable",
  courseNum: "exampleCourseNum",
  courseSection: "exampleCourseSection",
  customLabel: "exampleCustomLabel",
  date: new Date(),
  departmentCode: "exampleDepartmentCode",
  grade: "exampleGrade",
  id: 42,
  midtermGrade: "exampleMidtermGrade",
  note: "exampleNote",
  qpoints: 42.42,
  requirementType: "exampleRequirementType",
  shortTitle: "exampleShortTitle",
  studentId: 42,
  title: "exampleTitle",
  transfercredit: 42,
  units: "exampleUnits",
};
const FIND_MANY_RESULT = [
  {
    applicable: "exampleApplicable",
    courseNum: "exampleCourseNum",
    courseSection: "exampleCourseSection",
    customLabel: "exampleCustomLabel",
    date: new Date(),
    departmentCode: "exampleDepartmentCode",
    grade: "exampleGrade",
    id: 42,
    midtermGrade: "exampleMidtermGrade",
    note: "exampleNote",
    qpoints: 42.42,
    requirementType: "exampleRequirementType",
    shortTitle: "exampleShortTitle",
    studentId: 42,
    title: "exampleTitle",
    transfercredit: 42,
    units: "exampleUnits",
  },
];
const FIND_ONE_RESULT = {
  applicable: "exampleApplicable",
  courseNum: "exampleCourseNum",
  courseSection: "exampleCourseSection",
  customLabel: "exampleCustomLabel",
  date: new Date(),
  departmentCode: "exampleDepartmentCode",
  grade: "exampleGrade",
  id: 42,
  midtermGrade: "exampleMidtermGrade",
  note: "exampleNote",
  qpoints: 42.42,
  requirementType: "exampleRequirementType",
  shortTitle: "exampleShortTitle",
  studentId: 42,
  title: "exampleTitle",
  transfercredit: 42,
  units: "exampleUnits",
};

const service = {
  createStudentCourse() {
    return CREATE_RESULT;
  },
  studentCourses: () => FIND_MANY_RESULT,
  studentCourse: ({ where }: { where: { id: string } }) => {
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

describe("StudentCourse", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: StudentCourseService,
          useValue: service,
        },
      ],
      controllers: [StudentCourseController],
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

  test("POST /studentCourses", async () => {
    await request(app.getHttpServer())
      .post("/studentCourses")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        date: CREATE_RESULT.date.toISOString(),
      });
  });

  test("GET /studentCourses", async () => {
    await request(app.getHttpServer())
      .get("/studentCourses")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          date: FIND_MANY_RESULT[0].date.toISOString(),
        },
      ]);
  });

  test("GET /studentCourses/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/studentCourses"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /studentCourses/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/studentCourses"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        date: FIND_ONE_RESULT.date.toISOString(),
      });
  });

  test("POST /studentCourses existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/studentCourses")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        date: CREATE_RESULT.date.toISOString(),
      })
      .then(function () {
        agent
          .post("/studentCourses")
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
