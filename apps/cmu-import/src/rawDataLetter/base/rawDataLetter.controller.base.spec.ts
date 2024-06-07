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
import { RawDataLetterController } from "../rawDataLetter.controller";
import { RawDataLetterService } from "../rawDataLetter.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: 42,
  introText: "exampleIntroText",
  month: "exampleMonth",
  name: "exampleName",
  performanceCode: "examplePerformanceCode",
  performanceCodeText: "examplePerformanceCodeText",
  text: "exampleText",
  year: 42,
};
const CREATE_RESULT = {
  id: 42,
  introText: "exampleIntroText",
  month: "exampleMonth",
  name: "exampleName",
  performanceCode: "examplePerformanceCode",
  performanceCodeText: "examplePerformanceCodeText",
  text: "exampleText",
  year: 42,
};
const FIND_MANY_RESULT = [
  {
    id: 42,
    introText: "exampleIntroText",
    month: "exampleMonth",
    name: "exampleName",
    performanceCode: "examplePerformanceCode",
    performanceCodeText: "examplePerformanceCodeText",
    text: "exampleText",
    year: 42,
  },
];
const FIND_ONE_RESULT = {
  id: 42,
  introText: "exampleIntroText",
  month: "exampleMonth",
  name: "exampleName",
  performanceCode: "examplePerformanceCode",
  performanceCodeText: "examplePerformanceCodeText",
  text: "exampleText",
  year: 42,
};

const service = {
  createRawDataLetter() {
    return CREATE_RESULT;
  },
  rawDataLetters: () => FIND_MANY_RESULT,
  rawDataLetter: ({ where }: { where: { id: string } }) => {
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

describe("RawDataLetter", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: RawDataLetterService,
          useValue: service,
        },
      ],
      controllers: [RawDataLetterController],
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

  test("POST /rawDataLetters", async () => {
    await request(app.getHttpServer())
      .post("/rawDataLetters")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /rawDataLetters", async () => {
    await request(app.getHttpServer())
      .get("/rawDataLetters")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /rawDataLetters/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/rawDataLetters"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /rawDataLetters/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/rawDataLetters"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /rawDataLetters existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/rawDataLetters")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/rawDataLetters")
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
