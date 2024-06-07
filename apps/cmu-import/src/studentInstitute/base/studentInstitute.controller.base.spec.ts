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
import { StudentInstituteController } from "../studentInstitute.controller";
import { StudentInstituteService } from "../studentInstitute.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  degree: "exampleDegree",
  id: 42,
  institutesAbbr: "exampleInstitutesAbbr",
  institutesId: "exampleInstitutesId",
  institutesName: "exampleInstitutesName",
  institutesText: "exampleInstitutesText",
  irank: 42,
  major: "exampleMajor",
};
const CREATE_RESULT = {
  degree: "exampleDegree",
  id: 42,
  institutesAbbr: "exampleInstitutesAbbr",
  institutesId: "exampleInstitutesId",
  institutesName: "exampleInstitutesName",
  institutesText: "exampleInstitutesText",
  irank: 42,
  major: "exampleMajor",
};
const FIND_MANY_RESULT = [
  {
    degree: "exampleDegree",
    id: 42,
    institutesAbbr: "exampleInstitutesAbbr",
    institutesId: "exampleInstitutesId",
    institutesName: "exampleInstitutesName",
    institutesText: "exampleInstitutesText",
    irank: 42,
    major: "exampleMajor",
  },
];
const FIND_ONE_RESULT = {
  degree: "exampleDegree",
  id: 42,
  institutesAbbr: "exampleInstitutesAbbr",
  institutesId: "exampleInstitutesId",
  institutesName: "exampleInstitutesName",
  institutesText: "exampleInstitutesText",
  irank: 42,
  major: "exampleMajor",
};

const service = {
  createStudentInstitute() {
    return CREATE_RESULT;
  },
  studentInstitutes: () => FIND_MANY_RESULT,
  studentInstitute: ({ where }: { where: { id: string } }) => {
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

describe("StudentInstitute", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: StudentInstituteService,
          useValue: service,
        },
      ],
      controllers: [StudentInstituteController],
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

  test("POST /studentInstitutes", async () => {
    await request(app.getHttpServer())
      .post("/studentInstitutes")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /studentInstitutes", async () => {
    await request(app.getHttpServer())
      .get("/studentInstitutes")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /studentInstitutes/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/studentInstitutes"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /studentInstitutes/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/studentInstitutes"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /studentInstitutes existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/studentInstitutes")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/studentInstitutes")
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
