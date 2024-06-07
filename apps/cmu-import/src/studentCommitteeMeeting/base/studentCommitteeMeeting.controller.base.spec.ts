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
import { StudentCommitteeMeetingController } from "../studentCommitteeMeeting.controller";
import { StudentCommitteeMeetingService } from "../studentCommitteeMeeting.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: 42,
  meetingDate: new Date(),
  studentId: 42,
};
const CREATE_RESULT = {
  id: 42,
  meetingDate: new Date(),
  studentId: 42,
};
const FIND_MANY_RESULT = [
  {
    id: 42,
    meetingDate: new Date(),
    studentId: 42,
  },
];
const FIND_ONE_RESULT = {
  id: 42,
  meetingDate: new Date(),
  studentId: 42,
};

const service = {
  createStudentCommitteeMeeting() {
    return CREATE_RESULT;
  },
  studentCommitteeMeetings: () => FIND_MANY_RESULT,
  studentCommitteeMeeting: ({ where }: { where: { id: string } }) => {
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

describe("StudentCommitteeMeeting", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: StudentCommitteeMeetingService,
          useValue: service,
        },
      ],
      controllers: [StudentCommitteeMeetingController],
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

  test("POST /studentCommitteeMeetings", async () => {
    await request(app.getHttpServer())
      .post("/studentCommitteeMeetings")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        meetingDate: CREATE_RESULT.meetingDate.toISOString(),
      });
  });

  test("GET /studentCommitteeMeetings", async () => {
    await request(app.getHttpServer())
      .get("/studentCommitteeMeetings")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          meetingDate: FIND_MANY_RESULT[0].meetingDate.toISOString(),
        },
      ]);
  });

  test("GET /studentCommitteeMeetings/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/studentCommitteeMeetings"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /studentCommitteeMeetings/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/studentCommitteeMeetings"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        meetingDate: FIND_ONE_RESULT.meetingDate.toISOString(),
      });
  });

  test("POST /studentCommitteeMeetings existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/studentCommitteeMeetings")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        meetingDate: CREATE_RESULT.meetingDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/studentCommitteeMeetings")
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
