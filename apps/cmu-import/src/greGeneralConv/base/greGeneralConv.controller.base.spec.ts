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
import { GreGeneralConvController } from "../greGeneralConv.controller";
import { GreGeneralConvService } from "../greGeneralConv.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  currentScale: 42,
  id: 42,
  priorScale: 42,
  subject: "exampleSubject",
};
const CREATE_RESULT = {
  currentScale: 42,
  id: 42,
  priorScale: 42,
  subject: "exampleSubject",
};
const FIND_MANY_RESULT = [
  {
    currentScale: 42,
    id: 42,
    priorScale: 42,
    subject: "exampleSubject",
  },
];
const FIND_ONE_RESULT = {
  currentScale: 42,
  id: 42,
  priorScale: 42,
  subject: "exampleSubject",
};

const service = {
  createGreGeneralConv() {
    return CREATE_RESULT;
  },
  greGeneralConvs: () => FIND_MANY_RESULT,
  greGeneralConv: ({ where }: { where: { id: string } }) => {
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

describe("GreGeneralConv", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: GreGeneralConvService,
          useValue: service,
        },
      ],
      controllers: [GreGeneralConvController],
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

  test("POST /greGeneralConvs", async () => {
    await request(app.getHttpServer())
      .post("/greGeneralConvs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /greGeneralConvs", async () => {
    await request(app.getHttpServer())
      .get("/greGeneralConvs")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /greGeneralConvs/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/greGeneralConvs"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /greGeneralConvs/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/greGeneralConvs"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /greGeneralConvs existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/greGeneralConvs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/greGeneralConvs")
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
