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
import { InternshipsIniController } from "../internshipsIni.controller";
import { InternshipsIniService } from "../internshipsIni.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  city: "exampleCity",
  company: "exampleCompany",
  endDate: new Date(),
  id: 42,
  pending: "true",
  position: "examplePosition",
  startDate: new Date(),
  state: "exampleState",
};
const CREATE_RESULT = {
  city: "exampleCity",
  company: "exampleCompany",
  endDate: new Date(),
  id: 42,
  pending: "true",
  position: "examplePosition",
  startDate: new Date(),
  state: "exampleState",
};
const FIND_MANY_RESULT = [
  {
    city: "exampleCity",
    company: "exampleCompany",
    endDate: new Date(),
    id: 42,
    pending: "true",
    position: "examplePosition",
    startDate: new Date(),
    state: "exampleState",
  },
];
const FIND_ONE_RESULT = {
  city: "exampleCity",
  company: "exampleCompany",
  endDate: new Date(),
  id: 42,
  pending: "true",
  position: "examplePosition",
  startDate: new Date(),
  state: "exampleState",
};

const service = {
  createInternshipsIni() {
    return CREATE_RESULT;
  },
  internshipsInis: () => FIND_MANY_RESULT,
  internshipsIni: ({ where }: { where: { id: string } }) => {
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

describe("InternshipsIni", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: InternshipsIniService,
          useValue: service,
        },
      ],
      controllers: [InternshipsIniController],
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

  test("POST /internshipsInis", async () => {
    await request(app.getHttpServer())
      .post("/internshipsInis")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        endDate: CREATE_RESULT.endDate.toISOString(),
        startDate: CREATE_RESULT.startDate.toISOString(),
      });
  });

  test("GET /internshipsInis", async () => {
    await request(app.getHttpServer())
      .get("/internshipsInis")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          endDate: FIND_MANY_RESULT[0].endDate.toISOString(),
          startDate: FIND_MANY_RESULT[0].startDate.toISOString(),
        },
      ]);
  });

  test("GET /internshipsInis/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/internshipsInis"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /internshipsInis/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/internshipsInis"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        endDate: FIND_ONE_RESULT.endDate.toISOString(),
        startDate: FIND_ONE_RESULT.startDate.toISOString(),
      });
  });

  test("POST /internshipsInis existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/internshipsInis")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        endDate: CREATE_RESULT.endDate.toISOString(),
        startDate: CREATE_RESULT.startDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/internshipsInis")
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
