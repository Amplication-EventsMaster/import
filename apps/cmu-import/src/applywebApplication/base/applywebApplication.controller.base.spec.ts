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
import { ApplywebApplicationController } from "../applywebApplication.controller";
import { ApplywebApplicationService } from "../applywebApplication.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  dateSubmitted: new Date(),
  id: 42,
  pier: "examplePier",
  resumeFilepath: "exampleResumeFilepath",
  statementOfPurposeFilepath: "exampleStatementOfPurposeFilepath",
  studentCitizenshipCountry: "exampleStudentCitizenshipCountry",
  studentDateOfBirth: new Date(),
  studentEthnicity: "exampleStudentEthnicity",
  studentGender: "exampleStudentGender",
  studentNameFirst: "exampleStudentNameFirst",
  studentNameLast: "exampleStudentNameLast",
  studentTitle: "exampleStudentTitle",
  womenFellowship: "exampleWomenFellowship",
};
const CREATE_RESULT = {
  dateSubmitted: new Date(),
  id: 42,
  pier: "examplePier",
  resumeFilepath: "exampleResumeFilepath",
  statementOfPurposeFilepath: "exampleStatementOfPurposeFilepath",
  studentCitizenshipCountry: "exampleStudentCitizenshipCountry",
  studentDateOfBirth: new Date(),
  studentEthnicity: "exampleStudentEthnicity",
  studentGender: "exampleStudentGender",
  studentNameFirst: "exampleStudentNameFirst",
  studentNameLast: "exampleStudentNameLast",
  studentTitle: "exampleStudentTitle",
  womenFellowship: "exampleWomenFellowship",
};
const FIND_MANY_RESULT = [
  {
    dateSubmitted: new Date(),
    id: 42,
    pier: "examplePier",
    resumeFilepath: "exampleResumeFilepath",
    statementOfPurposeFilepath: "exampleStatementOfPurposeFilepath",
    studentCitizenshipCountry: "exampleStudentCitizenshipCountry",
    studentDateOfBirth: new Date(),
    studentEthnicity: "exampleStudentEthnicity",
    studentGender: "exampleStudentGender",
    studentNameFirst: "exampleStudentNameFirst",
    studentNameLast: "exampleStudentNameLast",
    studentTitle: "exampleStudentTitle",
    womenFellowship: "exampleWomenFellowship",
  },
];
const FIND_ONE_RESULT = {
  dateSubmitted: new Date(),
  id: 42,
  pier: "examplePier",
  resumeFilepath: "exampleResumeFilepath",
  statementOfPurposeFilepath: "exampleStatementOfPurposeFilepath",
  studentCitizenshipCountry: "exampleStudentCitizenshipCountry",
  studentDateOfBirth: new Date(),
  studentEthnicity: "exampleStudentEthnicity",
  studentGender: "exampleStudentGender",
  studentNameFirst: "exampleStudentNameFirst",
  studentNameLast: "exampleStudentNameLast",
  studentTitle: "exampleStudentTitle",
  womenFellowship: "exampleWomenFellowship",
};

const service = {
  createApplywebApplication() {
    return CREATE_RESULT;
  },
  applywebApplications: () => FIND_MANY_RESULT,
  applywebApplication: ({ where }: { where: { id: string } }) => {
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

describe("ApplywebApplication", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ApplywebApplicationService,
          useValue: service,
        },
      ],
      controllers: [ApplywebApplicationController],
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

  test("POST /applywebApplications", async () => {
    await request(app.getHttpServer())
      .post("/applywebApplications")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        dateSubmitted: CREATE_RESULT.dateSubmitted.toISOString(),
        studentDateOfBirth: CREATE_RESULT.studentDateOfBirth.toISOString(),
      });
  });

  test("GET /applywebApplications", async () => {
    await request(app.getHttpServer())
      .get("/applywebApplications")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          dateSubmitted: FIND_MANY_RESULT[0].dateSubmitted.toISOString(),
          studentDateOfBirth:
            FIND_MANY_RESULT[0].studentDateOfBirth.toISOString(),
        },
      ]);
  });

  test("GET /applywebApplications/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/applywebApplications"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /applywebApplications/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/applywebApplications"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        dateSubmitted: FIND_ONE_RESULT.dateSubmitted.toISOString(),
        studentDateOfBirth: FIND_ONE_RESULT.studentDateOfBirth.toISOString(),
      });
  });

  test("POST /applywebApplications existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/applywebApplications")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        dateSubmitted: CREATE_RESULT.dateSubmitted.toISOString(),
        studentDateOfBirth: CREATE_RESULT.studentDateOfBirth.toISOString(),
      })
      .then(function () {
        agent
          .post("/applywebApplications")
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
