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
import { QualsWritingController } from "../qualsWriting.controller";
import { QualsWritingService } from "../qualsWriting.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  engagingReaderExp: "exampleEngagingReaderExp",
  id: 42,
  organizationExp: "exampleOrganizationExp",
  overallExp: "exampleOverallExp",
  studentId: 42,
  summaryAudience: "exampleSummaryAudience",
  summaryTopic: "exampleSummaryTopic",
  timestamp: new Date(),
  urId: 42,
  writingStyleExp: "exampleWritingStyleExp",
};
const CREATE_RESULT = {
  engagingReaderExp: "exampleEngagingReaderExp",
  id: 42,
  organizationExp: "exampleOrganizationExp",
  overallExp: "exampleOverallExp",
  studentId: 42,
  summaryAudience: "exampleSummaryAudience",
  summaryTopic: "exampleSummaryTopic",
  timestamp: new Date(),
  urId: 42,
  writingStyleExp: "exampleWritingStyleExp",
};
const FIND_MANY_RESULT = [
  {
    engagingReaderExp: "exampleEngagingReaderExp",
    id: 42,
    organizationExp: "exampleOrganizationExp",
    overallExp: "exampleOverallExp",
    studentId: 42,
    summaryAudience: "exampleSummaryAudience",
    summaryTopic: "exampleSummaryTopic",
    timestamp: new Date(),
    urId: 42,
    writingStyleExp: "exampleWritingStyleExp",
  },
];
const FIND_ONE_RESULT = {
  engagingReaderExp: "exampleEngagingReaderExp",
  id: 42,
  organizationExp: "exampleOrganizationExp",
  overallExp: "exampleOverallExp",
  studentId: 42,
  summaryAudience: "exampleSummaryAudience",
  summaryTopic: "exampleSummaryTopic",
  timestamp: new Date(),
  urId: 42,
  writingStyleExp: "exampleWritingStyleExp",
};

const service = {
  createQualsWriting() {
    return CREATE_RESULT;
  },
  qualsWritings: () => FIND_MANY_RESULT,
  qualsWriting: ({ where }: { where: { id: string } }) => {
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

describe("QualsWriting", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: QualsWritingService,
          useValue: service,
        },
      ],
      controllers: [QualsWritingController],
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

  test("POST /qualsWritings", async () => {
    await request(app.getHttpServer())
      .post("/qualsWritings")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        timestamp: CREATE_RESULT.timestamp.toISOString(),
      });
  });

  test("GET /qualsWritings", async () => {
    await request(app.getHttpServer())
      .get("/qualsWritings")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          timestamp: FIND_MANY_RESULT[0].timestamp.toISOString(),
        },
      ]);
  });

  test("GET /qualsWritings/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/qualsWritings"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /qualsWritings/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/qualsWritings"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        timestamp: FIND_ONE_RESULT.timestamp.toISOString(),
      });
  });

  test("POST /qualsWritings existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/qualsWritings")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        timestamp: CREATE_RESULT.timestamp.toISOString(),
      })
      .then(function () {
        agent
          .post("/qualsWritings")
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
