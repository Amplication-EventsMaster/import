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
import { MeetingController } from "../meeting.controller";
import { MeetingService } from "../meeting.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  adminVisible: "true",
  department: "exampleDepartment",
  end: new Date(),
  facultyVisible: "true",
  id: 42,
  longDescription: "exampleLongDescription",
  shortDescription: "exampleShortDescription",
  start: new Date(),
};
const CREATE_RESULT = {
  adminVisible: "true",
  department: "exampleDepartment",
  end: new Date(),
  facultyVisible: "true",
  id: 42,
  longDescription: "exampleLongDescription",
  shortDescription: "exampleShortDescription",
  start: new Date(),
};
const FIND_MANY_RESULT = [
  {
    adminVisible: "true",
    department: "exampleDepartment",
    end: new Date(),
    facultyVisible: "true",
    id: 42,
    longDescription: "exampleLongDescription",
    shortDescription: "exampleShortDescription",
    start: new Date(),
  },
];
const FIND_ONE_RESULT = {
  adminVisible: "true",
  department: "exampleDepartment",
  end: new Date(),
  facultyVisible: "true",
  id: 42,
  longDescription: "exampleLongDescription",
  shortDescription: "exampleShortDescription",
  start: new Date(),
};

const service = {
  createMeeting() {
    return CREATE_RESULT;
  },
  meetings: () => FIND_MANY_RESULT,
  meeting: ({ where }: { where: { id: string } }) => {
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

describe("Meeting", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: MeetingService,
          useValue: service,
        },
      ],
      controllers: [MeetingController],
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

  test("POST /meetings", async () => {
    await request(app.getHttpServer())
      .post("/meetings")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        end: CREATE_RESULT.end.toISOString(),
        start: CREATE_RESULT.start.toISOString(),
      });
  });

  test("GET /meetings", async () => {
    await request(app.getHttpServer())
      .get("/meetings")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          end: FIND_MANY_RESULT[0].end.toISOString(),
          start: FIND_MANY_RESULT[0].start.toISOString(),
        },
      ]);
  });

  test("GET /meetings/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/meetings"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /meetings/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/meetings"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        end: FIND_ONE_RESULT.end.toISOString(),
        start: FIND_ONE_RESULT.start.toISOString(),
      });
  });

  test("POST /meetings existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/meetings")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        end: CREATE_RESULT.end.toISOString(),
        start: CREATE_RESULT.start.toISOString(),
      })
      .then(function () {
        agent
          .post("/meetings")
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
