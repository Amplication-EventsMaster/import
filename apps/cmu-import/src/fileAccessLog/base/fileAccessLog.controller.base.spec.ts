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
import { FileAccessLogController } from "../fileAccessLog.controller";
import { FileAccessLogService } from "../fileAccessLog.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  facultyId: 42,
  id: 42,
  sfId: 42,
  time: new Date(),
};
const CREATE_RESULT = {
  facultyId: 42,
  id: 42,
  sfId: 42,
  time: new Date(),
};
const FIND_MANY_RESULT = [
  {
    facultyId: 42,
    id: 42,
    sfId: 42,
    time: new Date(),
  },
];
const FIND_ONE_RESULT = {
  facultyId: 42,
  id: 42,
  sfId: 42,
  time: new Date(),
};

const service = {
  createFileAccessLog() {
    return CREATE_RESULT;
  },
  fileAccessLogs: () => FIND_MANY_RESULT,
  fileAccessLog: ({ where }: { where: { id: string } }) => {
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

describe("FileAccessLog", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: FileAccessLogService,
          useValue: service,
        },
      ],
      controllers: [FileAccessLogController],
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

  test("POST /fileAccessLogs", async () => {
    await request(app.getHttpServer())
      .post("/fileAccessLogs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        time: CREATE_RESULT.time.toISOString(),
      });
  });

  test("GET /fileAccessLogs", async () => {
    await request(app.getHttpServer())
      .get("/fileAccessLogs")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          time: FIND_MANY_RESULT[0].time.toISOString(),
        },
      ]);
  });

  test("GET /fileAccessLogs/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/fileAccessLogs"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /fileAccessLogs/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/fileAccessLogs"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        time: FIND_ONE_RESULT.time.toISOString(),
      });
  });

  test("POST /fileAccessLogs existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/fileAccessLogs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        time: CREATE_RESULT.time.toISOString(),
      })
      .then(function () {
        agent
          .post("/fileAccessLogs")
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
