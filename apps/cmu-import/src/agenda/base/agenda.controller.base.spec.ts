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
import { AgendaController } from "../agenda.controller";
import { AgendaService } from "../agenda.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  department: "exampleDepartment",
  id: 42,
  longDescription: "exampleLongDescription",
  shortDescription: "exampleShortDescription",
};
const CREATE_RESULT = {
  department: "exampleDepartment",
  id: 42,
  longDescription: "exampleLongDescription",
  shortDescription: "exampleShortDescription",
};
const FIND_MANY_RESULT = [
  {
    department: "exampleDepartment",
    id: 42,
    longDescription: "exampleLongDescription",
    shortDescription: "exampleShortDescription",
  },
];
const FIND_ONE_RESULT = {
  department: "exampleDepartment",
  id: 42,
  longDescription: "exampleLongDescription",
  shortDescription: "exampleShortDescription",
};

const service = {
  createAgenda() {
    return CREATE_RESULT;
  },
  agendaItems: () => FIND_MANY_RESULT,
  agenda: ({ where }: { where: { id: string } }) => {
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

describe("Agenda", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: AgendaService,
          useValue: service,
        },
      ],
      controllers: [AgendaController],
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

  test("POST /agenda", async () => {
    await request(app.getHttpServer())
      .post("/agenda")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /agenda", async () => {
    await request(app.getHttpServer())
      .get("/agenda")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /agenda/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/agenda"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /agenda/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/agenda"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /agenda existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/agenda")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/agenda")
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
