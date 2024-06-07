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
import { StatementController } from "../statement.controller";
import { StatementService } from "../statement.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdDate: new Date(),
  date: new Date(),
  documentId: 42,
  id: 42,
  modifiedDate: new Date(),
  text: "exampleText",
  textAll: "exampleTextAll",
};
const CREATE_RESULT = {
  createdDate: new Date(),
  date: new Date(),
  documentId: 42,
  id: 42,
  modifiedDate: new Date(),
  text: "exampleText",
  textAll: "exampleTextAll",
};
const FIND_MANY_RESULT = [
  {
    createdDate: new Date(),
    date: new Date(),
    documentId: 42,
    id: 42,
    modifiedDate: new Date(),
    text: "exampleText",
    textAll: "exampleTextAll",
  },
];
const FIND_ONE_RESULT = {
  createdDate: new Date(),
  date: new Date(),
  documentId: 42,
  id: 42,
  modifiedDate: new Date(),
  text: "exampleText",
  textAll: "exampleTextAll",
};

const service = {
  createStatement() {
    return CREATE_RESULT;
  },
  statements: () => FIND_MANY_RESULT,
  statement: ({ where }: { where: { id: string } }) => {
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

describe("Statement", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: StatementService,
          useValue: service,
        },
      ],
      controllers: [StatementController],
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

  test("POST /statements", async () => {
    await request(app.getHttpServer())
      .post("/statements")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdDate: CREATE_RESULT.createdDate.toISOString(),
        date: CREATE_RESULT.date.toISOString(),
        modifiedDate: CREATE_RESULT.modifiedDate.toISOString(),
      });
  });

  test("GET /statements", async () => {
    await request(app.getHttpServer())
      .get("/statements")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdDate: FIND_MANY_RESULT[0].createdDate.toISOString(),
          date: FIND_MANY_RESULT[0].date.toISOString(),
          modifiedDate: FIND_MANY_RESULT[0].modifiedDate.toISOString(),
        },
      ]);
  });

  test("GET /statements/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/statements"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /statements/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/statements"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdDate: FIND_ONE_RESULT.createdDate.toISOString(),
        date: FIND_ONE_RESULT.date.toISOString(),
        modifiedDate: FIND_ONE_RESULT.modifiedDate.toISOString(),
      });
  });

  test("POST /statements existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/statements")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdDate: CREATE_RESULT.createdDate.toISOString(),
        date: CREATE_RESULT.date.toISOString(),
        modifiedDate: CREATE_RESULT.modifiedDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/statements")
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
