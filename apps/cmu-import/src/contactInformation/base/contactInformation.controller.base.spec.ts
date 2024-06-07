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
import { ContactInformationController } from "../contactInformation.controller";
import { ContactInformationService } from "../contactInformation.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  address1: "exampleAddress1",
  address2: "exampleAddress2",
  city: "exampleCity",
  country: "exampleCountry",
  id: 42,
  phone: "examplePhone",
  state: "exampleState",
  studentId: 42,
  zip: "exampleZip",
};
const CREATE_RESULT = {
  address1: "exampleAddress1",
  address2: "exampleAddress2",
  city: "exampleCity",
  country: "exampleCountry",
  id: 42,
  phone: "examplePhone",
  state: "exampleState",
  studentId: 42,
  zip: "exampleZip",
};
const FIND_MANY_RESULT = [
  {
    address1: "exampleAddress1",
    address2: "exampleAddress2",
    city: "exampleCity",
    country: "exampleCountry",
    id: 42,
    phone: "examplePhone",
    state: "exampleState",
    studentId: 42,
    zip: "exampleZip",
  },
];
const FIND_ONE_RESULT = {
  address1: "exampleAddress1",
  address2: "exampleAddress2",
  city: "exampleCity",
  country: "exampleCountry",
  id: 42,
  phone: "examplePhone",
  state: "exampleState",
  studentId: 42,
  zip: "exampleZip",
};

const service = {
  createContactInformation() {
    return CREATE_RESULT;
  },
  contactInformations: () => FIND_MANY_RESULT,
  contactInformation: ({ where }: { where: { id: string } }) => {
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

describe("ContactInformation", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ContactInformationService,
          useValue: service,
        },
      ],
      controllers: [ContactInformationController],
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

  test("POST /contactInformations", async () => {
    await request(app.getHttpServer())
      .post("/contactInformations")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /contactInformations", async () => {
    await request(app.getHttpServer())
      .get("/contactInformations")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /contactInformations/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/contactInformations"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /contactInformations/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/contactInformations"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /contactInformations existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/contactInformations")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/contactInformations")
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
