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
import { EvaluationLetterController } from "../evaluationLetter.controller";
import { EvaluationLetterService } from "../evaluationLetter.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  date: new Date(),
  documentId: 42,
  id: 42,
  performanceCode: "examplePerformanceCode",
  text: "exampleText",
};
const CREATE_RESULT = {
  date: new Date(),
  documentId: 42,
  id: 42,
  performanceCode: "examplePerformanceCode",
  text: "exampleText",
};
const FIND_MANY_RESULT = [
  {
    date: new Date(),
    documentId: 42,
    id: 42,
    performanceCode: "examplePerformanceCode",
    text: "exampleText",
  },
];
const FIND_ONE_RESULT = {
  date: new Date(),
  documentId: 42,
  id: 42,
  performanceCode: "examplePerformanceCode",
  text: "exampleText",
};

const service = {
  createEvaluationLetter() {
    return CREATE_RESULT;
  },
  evaluationLetters: () => FIND_MANY_RESULT,
  evaluationLetter: ({ where }: { where: { id: string } }) => {
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

describe("EvaluationLetter", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: EvaluationLetterService,
          useValue: service,
        },
      ],
      controllers: [EvaluationLetterController],
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

  test("POST /evaluationLetters", async () => {
    await request(app.getHttpServer())
      .post("/evaluationLetters")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        date: CREATE_RESULT.date.toISOString(),
      });
  });

  test("GET /evaluationLetters", async () => {
    await request(app.getHttpServer())
      .get("/evaluationLetters")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          date: FIND_MANY_RESULT[0].date.toISOString(),
        },
      ]);
  });

  test("GET /evaluationLetters/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/evaluationLetters"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /evaluationLetters/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/evaluationLetters"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        date: FIND_ONE_RESULT.date.toISOString(),
      });
  });

  test("POST /evaluationLetters existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/evaluationLetters")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        date: CREATE_RESULT.date.toISOString(),
      })
      .then(function () {
        agent
          .post("/evaluationLetters")
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
