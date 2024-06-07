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
import { StudentDocumentPartController } from "../studentDocumentPart.controller";
import { StudentDocumentPartService } from "../studentDocumentPart.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  documentId: 42,
  id: 42,
  isDefault: 42,
  templatePartId: 42,
  text: "exampleText",
};
const CREATE_RESULT = {
  documentId: 42,
  id: 42,
  isDefault: 42,
  templatePartId: 42,
  text: "exampleText",
};
const FIND_MANY_RESULT = [
  {
    documentId: 42,
    id: 42,
    isDefault: 42,
    templatePartId: 42,
    text: "exampleText",
  },
];
const FIND_ONE_RESULT = {
  documentId: 42,
  id: 42,
  isDefault: 42,
  templatePartId: 42,
  text: "exampleText",
};

const service = {
  createStudentDocumentPart() {
    return CREATE_RESULT;
  },
  studentDocumentParts: () => FIND_MANY_RESULT,
  studentDocumentPart: ({ where }: { where: { id: string } }) => {
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

describe("StudentDocumentPart", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: StudentDocumentPartService,
          useValue: service,
        },
      ],
      controllers: [StudentDocumentPartController],
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

  test("POST /studentDocumentParts", async () => {
    await request(app.getHttpServer())
      .post("/studentDocumentParts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /studentDocumentParts", async () => {
    await request(app.getHttpServer())
      .get("/studentDocumentParts")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /studentDocumentParts/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/studentDocumentParts"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /studentDocumentParts/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/studentDocumentParts"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /studentDocumentParts existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/studentDocumentParts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/studentDocumentParts")
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
