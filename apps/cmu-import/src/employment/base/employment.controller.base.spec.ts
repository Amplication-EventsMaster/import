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
import { EmploymentController } from "../employment.controller";
import { EmploymentService } from "../employment.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  address1: "exampleAddress1",
  address2: "exampleAddress2",
  city: "exampleCity",
  country: "exampleCountry",
  date: new Date(),
  email: "exampleEmail",
  employer: "exampleEmployer",
  id: 42,
  phone: "examplePhone",
  state: "exampleState",
  typeField: "exampleTypeField",
  zip: "exampleZip",
};
const CREATE_RESULT = {
  address1: "exampleAddress1",
  address2: "exampleAddress2",
  city: "exampleCity",
  country: "exampleCountry",
  date: new Date(),
  email: "exampleEmail",
  employer: "exampleEmployer",
  id: 42,
  phone: "examplePhone",
  state: "exampleState",
  typeField: "exampleTypeField",
  zip: "exampleZip",
};
const FIND_MANY_RESULT = [
  {
    address1: "exampleAddress1",
    address2: "exampleAddress2",
    city: "exampleCity",
    country: "exampleCountry",
    date: new Date(),
    email: "exampleEmail",
    employer: "exampleEmployer",
    id: 42,
    phone: "examplePhone",
    state: "exampleState",
    typeField: "exampleTypeField",
    zip: "exampleZip",
  },
];
const FIND_ONE_RESULT = {
  address1: "exampleAddress1",
  address2: "exampleAddress2",
  city: "exampleCity",
  country: "exampleCountry",
  date: new Date(),
  email: "exampleEmail",
  employer: "exampleEmployer",
  id: 42,
  phone: "examplePhone",
  state: "exampleState",
  typeField: "exampleTypeField",
  zip: "exampleZip",
};

const service = {
  createEmployment() {
    return CREATE_RESULT;
  },
  employments: () => FIND_MANY_RESULT,
  employment: ({ where }: { where: { id: string } }) => {
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

describe("Employment", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: EmploymentService,
          useValue: service,
        },
      ],
      controllers: [EmploymentController],
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

  test("POST /employments", async () => {
    await request(app.getHttpServer())
      .post("/employments")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        date: CREATE_RESULT.date.toISOString(),
      });
  });

  test("GET /employments", async () => {
    await request(app.getHttpServer())
      .get("/employments")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          date: FIND_MANY_RESULT[0].date.toISOString(),
        },
      ]);
  });

  test("GET /employments/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/employments"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /employments/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/employments"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        date: FIND_ONE_RESULT.date.toISOString(),
      });
  });

  test("POST /employments existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/employments")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        date: CREATE_RESULT.date.toISOString(),
      })
      .then(function () {
        agent
          .post("/employments")
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
