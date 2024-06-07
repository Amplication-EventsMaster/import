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
import { StudentDatumController } from "../studentDatum.controller";
import { StudentDatumService } from "../studentDatum.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  area: "exampleArea",
  citizenship: "exampleCitizenship",
  curriculum: "exampleCurriculum",
  degree: "exampleDegree",
  department: "exampleDepartment",
  enterDate: new Date(),
  gender: "exampleGender",
  guid: "exampleGuid",
  id: 42,
  institutesId: "exampleInstitutesId",
  institutesName: "exampleInstitutesName",
  mltSwitch: "true",
  parttime: 42,
  program: "exampleProgram",
  residency: "exampleResidency",
  status: "exampleStatus",
  statusDate: new Date(),
  undergrad: "exampleUndergrad",
  year: 42.42,
  yearAdjust: "exampleYearAdjust",
};
const CREATE_RESULT = {
  area: "exampleArea",
  citizenship: "exampleCitizenship",
  curriculum: "exampleCurriculum",
  degree: "exampleDegree",
  department: "exampleDepartment",
  enterDate: new Date(),
  gender: "exampleGender",
  guid: "exampleGuid",
  id: 42,
  institutesId: "exampleInstitutesId",
  institutesName: "exampleInstitutesName",
  mltSwitch: "true",
  parttime: 42,
  program: "exampleProgram",
  residency: "exampleResidency",
  status: "exampleStatus",
  statusDate: new Date(),
  undergrad: "exampleUndergrad",
  year: 42.42,
  yearAdjust: "exampleYearAdjust",
};
const FIND_MANY_RESULT = [
  {
    area: "exampleArea",
    citizenship: "exampleCitizenship",
    curriculum: "exampleCurriculum",
    degree: "exampleDegree",
    department: "exampleDepartment",
    enterDate: new Date(),
    gender: "exampleGender",
    guid: "exampleGuid",
    id: 42,
    institutesId: "exampleInstitutesId",
    institutesName: "exampleInstitutesName",
    mltSwitch: "true",
    parttime: 42,
    program: "exampleProgram",
    residency: "exampleResidency",
    status: "exampleStatus",
    statusDate: new Date(),
    undergrad: "exampleUndergrad",
    year: 42.42,
    yearAdjust: "exampleYearAdjust",
  },
];
const FIND_ONE_RESULT = {
  area: "exampleArea",
  citizenship: "exampleCitizenship",
  curriculum: "exampleCurriculum",
  degree: "exampleDegree",
  department: "exampleDepartment",
  enterDate: new Date(),
  gender: "exampleGender",
  guid: "exampleGuid",
  id: 42,
  institutesId: "exampleInstitutesId",
  institutesName: "exampleInstitutesName",
  mltSwitch: "true",
  parttime: 42,
  program: "exampleProgram",
  residency: "exampleResidency",
  status: "exampleStatus",
  statusDate: new Date(),
  undergrad: "exampleUndergrad",
  year: 42.42,
  yearAdjust: "exampleYearAdjust",
};

const service = {
  createStudentDatum() {
    return CREATE_RESULT;
  },
  studentData: () => FIND_MANY_RESULT,
  studentDatum: ({ where }: { where: { id: string } }) => {
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

describe("StudentDatum", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: StudentDatumService,
          useValue: service,
        },
      ],
      controllers: [StudentDatumController],
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

  test("POST /studentData", async () => {
    await request(app.getHttpServer())
      .post("/studentData")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        enterDate: CREATE_RESULT.enterDate.toISOString(),
        statusDate: CREATE_RESULT.statusDate.toISOString(),
      });
  });

  test("GET /studentData", async () => {
    await request(app.getHttpServer())
      .get("/studentData")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          enterDate: FIND_MANY_RESULT[0].enterDate.toISOString(),
          statusDate: FIND_MANY_RESULT[0].statusDate.toISOString(),
        },
      ]);
  });

  test("GET /studentData/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/studentData"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /studentData/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/studentData"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        enterDate: FIND_ONE_RESULT.enterDate.toISOString(),
        statusDate: FIND_ONE_RESULT.statusDate.toISOString(),
      });
  });

  test("POST /studentData existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/studentData")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        enterDate: CREATE_RESULT.enterDate.toISOString(),
        statusDate: CREATE_RESULT.statusDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/studentData")
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
