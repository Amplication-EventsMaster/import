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
import { FacultyCertController } from "../facultyCert.controller";
import { FacultyCertService } from "../facultyCert.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  category: "exampleCategory",
  certDate: new Date(),
  facultyId: 42,
  id: 42,
  refId: 42,
};
const CREATE_RESULT = {
  category: "exampleCategory",
  certDate: new Date(),
  facultyId: 42,
  id: 42,
  refId: 42,
};
const FIND_MANY_RESULT = [
  {
    category: "exampleCategory",
    certDate: new Date(),
    facultyId: 42,
    id: 42,
    refId: 42,
  },
];
const FIND_ONE_RESULT = {
  category: "exampleCategory",
  certDate: new Date(),
  facultyId: 42,
  id: 42,
  refId: 42,
};

const service = {
  createFacultyCert() {
    return CREATE_RESULT;
  },
  facultyCerts: () => FIND_MANY_RESULT,
  facultyCert: ({ where }: { where: { id: string } }) => {
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

describe("FacultyCert", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: FacultyCertService,
          useValue: service,
        },
      ],
      controllers: [FacultyCertController],
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

  test("POST /facultyCerts", async () => {
    await request(app.getHttpServer())
      .post("/facultyCerts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        certDate: CREATE_RESULT.certDate.toISOString(),
      });
  });

  test("GET /facultyCerts", async () => {
    await request(app.getHttpServer())
      .get("/facultyCerts")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          certDate: FIND_MANY_RESULT[0].certDate.toISOString(),
        },
      ]);
  });

  test("GET /facultyCerts/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/facultyCerts"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /facultyCerts/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/facultyCerts"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        certDate: FIND_ONE_RESULT.certDate.toISOString(),
      });
  });

  test("POST /facultyCerts existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/facultyCerts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        certDate: CREATE_RESULT.certDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/facultyCerts")
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
