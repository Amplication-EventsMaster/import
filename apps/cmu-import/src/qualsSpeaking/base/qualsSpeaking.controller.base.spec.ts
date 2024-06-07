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
import { QualsSpeakingController } from "../qualsSpeaking.controller";
import { QualsSpeakingService } from "../qualsSpeaking.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  avQualityExp: "exampleAvQualityExp",
  id: 42,
  interactionExp: "exampleInteractionExp",
  organizationExp: "exampleOrganizationExp",
  overallExp: "exampleOverallExp",
  qcId: 42,
  speakingSkillExp: "exampleSpeakingSkillExp",
  studentId: 42,
  summary: "exampleSummary",
  timestamp: new Date(),
  understandingExp: "exampleUnderstandingExp",
  urId: 42,
};
const CREATE_RESULT = {
  avQualityExp: "exampleAvQualityExp",
  id: 42,
  interactionExp: "exampleInteractionExp",
  organizationExp: "exampleOrganizationExp",
  overallExp: "exampleOverallExp",
  qcId: 42,
  speakingSkillExp: "exampleSpeakingSkillExp",
  studentId: 42,
  summary: "exampleSummary",
  timestamp: new Date(),
  understandingExp: "exampleUnderstandingExp",
  urId: 42,
};
const FIND_MANY_RESULT = [
  {
    avQualityExp: "exampleAvQualityExp",
    id: 42,
    interactionExp: "exampleInteractionExp",
    organizationExp: "exampleOrganizationExp",
    overallExp: "exampleOverallExp",
    qcId: 42,
    speakingSkillExp: "exampleSpeakingSkillExp",
    studentId: 42,
    summary: "exampleSummary",
    timestamp: new Date(),
    understandingExp: "exampleUnderstandingExp",
    urId: 42,
  },
];
const FIND_ONE_RESULT = {
  avQualityExp: "exampleAvQualityExp",
  id: 42,
  interactionExp: "exampleInteractionExp",
  organizationExp: "exampleOrganizationExp",
  overallExp: "exampleOverallExp",
  qcId: 42,
  speakingSkillExp: "exampleSpeakingSkillExp",
  studentId: 42,
  summary: "exampleSummary",
  timestamp: new Date(),
  understandingExp: "exampleUnderstandingExp",
  urId: 42,
};

const service = {
  createQualsSpeaking() {
    return CREATE_RESULT;
  },
  qualsSpeakings: () => FIND_MANY_RESULT,
  qualsSpeaking: ({ where }: { where: { id: string } }) => {
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

describe("QualsSpeaking", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: QualsSpeakingService,
          useValue: service,
        },
      ],
      controllers: [QualsSpeakingController],
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

  test("POST /qualsSpeakings", async () => {
    await request(app.getHttpServer())
      .post("/qualsSpeakings")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        timestamp: CREATE_RESULT.timestamp.toISOString(),
      });
  });

  test("GET /qualsSpeakings", async () => {
    await request(app.getHttpServer())
      .get("/qualsSpeakings")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          timestamp: FIND_MANY_RESULT[0].timestamp.toISOString(),
        },
      ]);
  });

  test("GET /qualsSpeakings/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/qualsSpeakings"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /qualsSpeakings/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/qualsSpeakings"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        timestamp: FIND_ONE_RESULT.timestamp.toISOString(),
      });
  });

  test("POST /qualsSpeakings existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/qualsSpeakings")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        timestamp: CREATE_RESULT.timestamp.toISOString(),
      })
      .then(function () {
        agent
          .post("/qualsSpeakings")
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
