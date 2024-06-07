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
import { QualsResearchForOtherStudentController } from "../qualsResearchForOtherStudent.controller";
import { QualsResearchForOtherStudentService } from "../qualsResearchForOtherStudent.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  approachExp: "exampleApproachExp",
  id: 42,
  insightExp: "exampleInsightExp",
  interpretationExp: "exampleInterpretationExp",
  overallExp: "exampleOverallExp",
  progress: "exampleProgress",
  studentId: 42,
  summary: "exampleSummary",
  timestamp: new Date(),
  understandingExp: "exampleUnderstandingExp",
  urId: 42,
};
const CREATE_RESULT = {
  approachExp: "exampleApproachExp",
  id: 42,
  insightExp: "exampleInsightExp",
  interpretationExp: "exampleInterpretationExp",
  overallExp: "exampleOverallExp",
  progress: "exampleProgress",
  studentId: 42,
  summary: "exampleSummary",
  timestamp: new Date(),
  understandingExp: "exampleUnderstandingExp",
  urId: 42,
};
const FIND_MANY_RESULT = [
  {
    approachExp: "exampleApproachExp",
    id: 42,
    insightExp: "exampleInsightExp",
    interpretationExp: "exampleInterpretationExp",
    overallExp: "exampleOverallExp",
    progress: "exampleProgress",
    studentId: 42,
    summary: "exampleSummary",
    timestamp: new Date(),
    understandingExp: "exampleUnderstandingExp",
    urId: 42,
  },
];
const FIND_ONE_RESULT = {
  approachExp: "exampleApproachExp",
  id: 42,
  insightExp: "exampleInsightExp",
  interpretationExp: "exampleInterpretationExp",
  overallExp: "exampleOverallExp",
  progress: "exampleProgress",
  studentId: 42,
  summary: "exampleSummary",
  timestamp: new Date(),
  understandingExp: "exampleUnderstandingExp",
  urId: 42,
};

const service = {
  createQualsResearchForOtherStudent() {
    return CREATE_RESULT;
  },
  qualsResearchForOtherStudents: () => FIND_MANY_RESULT,
  qualsResearchForOtherStudent: ({ where }: { where: { id: string } }) => {
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

describe("QualsResearchForOtherStudent", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: QualsResearchForOtherStudentService,
          useValue: service,
        },
      ],
      controllers: [QualsResearchForOtherStudentController],
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

  test("POST /qualsResearchForOtherStudents", async () => {
    await request(app.getHttpServer())
      .post("/qualsResearchForOtherStudents")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        timestamp: CREATE_RESULT.timestamp.toISOString(),
      });
  });

  test("GET /qualsResearchForOtherStudents", async () => {
    await request(app.getHttpServer())
      .get("/qualsResearchForOtherStudents")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          timestamp: FIND_MANY_RESULT[0].timestamp.toISOString(),
        },
      ]);
  });

  test("GET /qualsResearchForOtherStudents/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/qualsResearchForOtherStudents"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /qualsResearchForOtherStudents/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/qualsResearchForOtherStudents"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        timestamp: FIND_ONE_RESULT.timestamp.toISOString(),
      });
  });

  test("POST /qualsResearchForOtherStudents existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/qualsResearchForOtherStudents")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        timestamp: CREATE_RESULT.timestamp.toISOString(),
      })
      .then(function () {
        agent
          .post("/qualsResearchForOtherStudents")
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
