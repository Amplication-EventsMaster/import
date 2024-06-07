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
import { DocumentTemplatePartController } from "../documentTemplatePart.controller";
import { DocumentTemplatePartService } from "../documentTemplatePart.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  advisorHide: 42,
  defaultText: "exampleDefaultText",
  id: 42,
  keepWithNext: 42,
  partOrder: 42,
  templateId: 42,
  typeField: "exampleTypeField",
};
const CREATE_RESULT = {
  advisorHide: 42,
  defaultText: "exampleDefaultText",
  id: 42,
  keepWithNext: 42,
  partOrder: 42,
  templateId: 42,
  typeField: "exampleTypeField",
};
const FIND_MANY_RESULT = [
  {
    advisorHide: 42,
    defaultText: "exampleDefaultText",
    id: 42,
    keepWithNext: 42,
    partOrder: 42,
    templateId: 42,
    typeField: "exampleTypeField",
  },
];
const FIND_ONE_RESULT = {
  advisorHide: 42,
  defaultText: "exampleDefaultText",
  id: 42,
  keepWithNext: 42,
  partOrder: 42,
  templateId: 42,
  typeField: "exampleTypeField",
};

const service = {
  createDocumentTemplatePart() {
    return CREATE_RESULT;
  },
  documentTemplateParts: () => FIND_MANY_RESULT,
  documentTemplatePart: ({ where }: { where: { id: string } }) => {
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

describe("DocumentTemplatePart", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: DocumentTemplatePartService,
          useValue: service,
        },
      ],
      controllers: [DocumentTemplatePartController],
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

  test("POST /documentTemplateParts", async () => {
    await request(app.getHttpServer())
      .post("/documentTemplateParts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /documentTemplateParts", async () => {
    await request(app.getHttpServer())
      .get("/documentTemplateParts")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /documentTemplateParts/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/documentTemplateParts"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /documentTemplateParts/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/documentTemplateParts"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /documentTemplateParts existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/documentTemplateParts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/documentTemplateParts")
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
