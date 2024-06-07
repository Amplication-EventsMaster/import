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
import { ThesisCommitteeController } from "../thesisCommittee.controller";
import { ThesisCommitteeService } from "../thesisCommittee.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  committeeRole: "exampleCommitteeRole",
  facultyId: 42,
  id: 42,
  pending: "true",
  thesisType: "exampleThesisType",
};
const CREATE_RESULT = {
  committeeRole: "exampleCommitteeRole",
  facultyId: 42,
  id: 42,
  pending: "true",
  thesisType: "exampleThesisType",
};
const FIND_MANY_RESULT = [
  {
    committeeRole: "exampleCommitteeRole",
    facultyId: 42,
    id: 42,
    pending: "true",
    thesisType: "exampleThesisType",
  },
];
const FIND_ONE_RESULT = {
  committeeRole: "exampleCommitteeRole",
  facultyId: 42,
  id: 42,
  pending: "true",
  thesisType: "exampleThesisType",
};

const service = {
  createThesisCommittee() {
    return CREATE_RESULT;
  },
  thesisCommittees: () => FIND_MANY_RESULT,
  thesisCommittee: ({ where }: { where: { id: string } }) => {
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

describe("ThesisCommittee", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ThesisCommitteeService,
          useValue: service,
        },
      ],
      controllers: [ThesisCommitteeController],
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

  test("POST /thesisCommittees", async () => {
    await request(app.getHttpServer())
      .post("/thesisCommittees")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /thesisCommittees", async () => {
    await request(app.getHttpServer())
      .get("/thesisCommittees")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /thesisCommittees/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/thesisCommittees"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /thesisCommittees/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/thesisCommittees"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /thesisCommittees existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/thesisCommittees")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/thesisCommittees")
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
