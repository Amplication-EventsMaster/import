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
import { GeneralDatumController } from "../generalDatum.controller";
import { GeneralDatumService } from "../generalDatum.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  date: new Date(),
  date2: new Date(),
  id: 42,
  text: "exampleText",
  val: "exampleVal",
  val2: "exampleVal2",
};
const CREATE_RESULT = {
  date: new Date(),
  date2: new Date(),
  id: 42,
  text: "exampleText",
  val: "exampleVal",
  val2: "exampleVal2",
};
const FIND_MANY_RESULT = [
  {
    date: new Date(),
    date2: new Date(),
    id: 42,
    text: "exampleText",
    val: "exampleVal",
    val2: "exampleVal2",
  },
];
const FIND_ONE_RESULT = {
  date: new Date(),
  date2: new Date(),
  id: 42,
  text: "exampleText",
  val: "exampleVal",
  val2: "exampleVal2",
};

const service = {
  createGeneralDatum() {
    return CREATE_RESULT;
  },
  generalData: () => FIND_MANY_RESULT,
  generalDatum: ({ where }: { where: { id: string } }) => {
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

describe("GeneralDatum", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: GeneralDatumService,
          useValue: service,
        },
      ],
      controllers: [GeneralDatumController],
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

  test("POST /generalData", async () => {
    await request(app.getHttpServer())
      .post("/generalData")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        date: CREATE_RESULT.date.toISOString(),
        date2: CREATE_RESULT.date2.toISOString(),
      });
  });

  test("GET /generalData", async () => {
    await request(app.getHttpServer())
      .get("/generalData")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          date: FIND_MANY_RESULT[0].date.toISOString(),
          date2: FIND_MANY_RESULT[0].date2.toISOString(),
        },
      ]);
  });

  test("GET /generalData/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/generalData"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /generalData/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/generalData"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        date: FIND_ONE_RESULT.date.toISOString(),
        date2: FIND_ONE_RESULT.date2.toISOString(),
      });
  });

  test("POST /generalData existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/generalData")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        date: CREATE_RESULT.date.toISOString(),
        date2: CREATE_RESULT.date2.toISOString(),
      })
      .then(function () {
        agent
          .post("/generalData")
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
