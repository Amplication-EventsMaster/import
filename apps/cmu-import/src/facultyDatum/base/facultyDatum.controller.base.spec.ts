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
import { FacultyDatumController } from "../facultyDatum.controller";
import { FacultyDatumService } from "../facultyDatum.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  department: "exampleDepartment",
  id: 42,
  institutesId: "exampleInstitutesId",
  institutesName: "exampleInstitutesName",
  institution: "exampleInstitution",
  institutionAbbr: "exampleInstitutionAbbr",
  status: "exampleStatus",
  title: "exampleTitle",
  urId: 42,
};
const CREATE_RESULT = {
  department: "exampleDepartment",
  id: 42,
  institutesId: "exampleInstitutesId",
  institutesName: "exampleInstitutesName",
  institution: "exampleInstitution",
  institutionAbbr: "exampleInstitutionAbbr",
  status: "exampleStatus",
  title: "exampleTitle",
  urId: 42,
};
const FIND_MANY_RESULT = [
  {
    department: "exampleDepartment",
    id: 42,
    institutesId: "exampleInstitutesId",
    institutesName: "exampleInstitutesName",
    institution: "exampleInstitution",
    institutionAbbr: "exampleInstitutionAbbr",
    status: "exampleStatus",
    title: "exampleTitle",
    urId: 42,
  },
];
const FIND_ONE_RESULT = {
  department: "exampleDepartment",
  id: 42,
  institutesId: "exampleInstitutesId",
  institutesName: "exampleInstitutesName",
  institution: "exampleInstitution",
  institutionAbbr: "exampleInstitutionAbbr",
  status: "exampleStatus",
  title: "exampleTitle",
  urId: 42,
};

const service = {
  createFacultyDatum() {
    return CREATE_RESULT;
  },
  facultyData: () => FIND_MANY_RESULT,
  facultyDatum: ({ where }: { where: { id: string } }) => {
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

describe("FacultyDatum", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: FacultyDatumService,
          useValue: service,
        },
      ],
      controllers: [FacultyDatumController],
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

  test("POST /facultyData", async () => {
    await request(app.getHttpServer())
      .post("/facultyData")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /facultyData", async () => {
    await request(app.getHttpServer())
      .get("/facultyData")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /facultyData/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/facultyData"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /facultyData/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/facultyData"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /facultyData existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/facultyData")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/facultyData")
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
