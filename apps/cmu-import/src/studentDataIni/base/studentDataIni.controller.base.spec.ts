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
import { StudentDataIniController } from "../studentDataIni.controller";
import { StudentDataIniService } from "../studentDataIni.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  curriculumOption: "exampleCurriculumOption",
  curriculumTrack: "exampleCurriculumTrack",
  id: "exampleId",
  programDuration: 42,
};
const CREATE_RESULT = {
  curriculumOption: "exampleCurriculumOption",
  curriculumTrack: "exampleCurriculumTrack",
  id: "exampleId",
  programDuration: 42,
};
const FIND_MANY_RESULT = [
  {
    curriculumOption: "exampleCurriculumOption",
    curriculumTrack: "exampleCurriculumTrack",
    id: "exampleId",
    programDuration: 42,
  },
];
const FIND_ONE_RESULT = {
  curriculumOption: "exampleCurriculumOption",
  curriculumTrack: "exampleCurriculumTrack",
  id: "exampleId",
  programDuration: 42,
};

const service = {
  createStudentDataIni() {
    return CREATE_RESULT;
  },
  studentDataInis: () => FIND_MANY_RESULT,
  studentDataIni: ({ where }: { where: { id: string } }) => {
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

describe("StudentDataIni", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: StudentDataIniService,
          useValue: service,
        },
      ],
      controllers: [StudentDataIniController],
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

  test("POST /studentDataInis", async () => {
    await request(app.getHttpServer())
      .post("/studentDataInis")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /studentDataInis", async () => {
    await request(app.getHttpServer())
      .get("/studentDataInis")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /studentDataInis/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/studentDataInis"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /studentDataInis/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/studentDataInis"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /studentDataInis existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/studentDataInis")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/studentDataInis")
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
