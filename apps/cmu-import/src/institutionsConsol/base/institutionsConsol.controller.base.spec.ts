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
import { InstitutionsConsolController } from "../institutionsConsol.controller";
import { InstitutionsConsolService } from "../institutionsConsol.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  city: "exampleCity",
  code: "exampleCode",
  country: "exampleCountry",
  countryCode: "exampleCountryCode",
  id: 42,
  institution: "exampleInstitution",
  institutionAbbr: "exampleInstitutionAbbr",
  institutionAscii: "exampleInstitutionAscii",
  state: "exampleState",
  url: "exampleUrl",
};
const CREATE_RESULT = {
  city: "exampleCity",
  code: "exampleCode",
  country: "exampleCountry",
  countryCode: "exampleCountryCode",
  id: 42,
  institution: "exampleInstitution",
  institutionAbbr: "exampleInstitutionAbbr",
  institutionAscii: "exampleInstitutionAscii",
  state: "exampleState",
  url: "exampleUrl",
};
const FIND_MANY_RESULT = [
  {
    city: "exampleCity",
    code: "exampleCode",
    country: "exampleCountry",
    countryCode: "exampleCountryCode",
    id: 42,
    institution: "exampleInstitution",
    institutionAbbr: "exampleInstitutionAbbr",
    institutionAscii: "exampleInstitutionAscii",
    state: "exampleState",
    url: "exampleUrl",
  },
];
const FIND_ONE_RESULT = {
  city: "exampleCity",
  code: "exampleCode",
  country: "exampleCountry",
  countryCode: "exampleCountryCode",
  id: 42,
  institution: "exampleInstitution",
  institutionAbbr: "exampleInstitutionAbbr",
  institutionAscii: "exampleInstitutionAscii",
  state: "exampleState",
  url: "exampleUrl",
};

const service = {
  createInstitutionsConsol() {
    return CREATE_RESULT;
  },
  institutionsConsols: () => FIND_MANY_RESULT,
  institutionsConsol: ({ where }: { where: { id: string } }) => {
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

describe("InstitutionsConsol", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: InstitutionsConsolService,
          useValue: service,
        },
      ],
      controllers: [InstitutionsConsolController],
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

  test("POST /institutionsConsols", async () => {
    await request(app.getHttpServer())
      .post("/institutionsConsols")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /institutionsConsols", async () => {
    await request(app.getHttpServer())
      .get("/institutionsConsols")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /institutionsConsols/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/institutionsConsols"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /institutionsConsols/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/institutionsConsols"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /institutionsConsols existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/institutionsConsols")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/institutionsConsols")
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
