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
import { ResponsibleConductOfResearchController } from "../responsibleConductOfResearch.controller";
import { ResponsibleConductOfResearchService } from "../responsibleConductOfResearch.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  completionDate: new Date(),
  description: "exampleDescription",
  id: 42,
  studentId: 42,
};
const CREATE_RESULT = {
  completionDate: new Date(),
  description: "exampleDescription",
  id: 42,
  studentId: 42,
};
const FIND_MANY_RESULT = [
  {
    completionDate: new Date(),
    description: "exampleDescription",
    id: 42,
    studentId: 42,
  },
];
const FIND_ONE_RESULT = {
  completionDate: new Date(),
  description: "exampleDescription",
  id: 42,
  studentId: 42,
};

const service = {
  createResponsibleConductOfResearch() {
    return CREATE_RESULT;
  },
  responsibleConductOfResearches: () => FIND_MANY_RESULT,
  responsibleConductOfResearch: ({ where }: { where: { id: string } }) => {
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

describe("ResponsibleConductOfResearch", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ResponsibleConductOfResearchService,
          useValue: service,
        },
      ],
      controllers: [ResponsibleConductOfResearchController],
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

  test("POST /responsibleConductOfResearches", async () => {
    await request(app.getHttpServer())
      .post("/responsibleConductOfResearches")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        completionDate: CREATE_RESULT.completionDate.toISOString(),
      });
  });

  test("GET /responsibleConductOfResearches", async () => {
    await request(app.getHttpServer())
      .get("/responsibleConductOfResearches")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          completionDate: FIND_MANY_RESULT[0].completionDate.toISOString(),
        },
      ]);
  });

  test("GET /responsibleConductOfResearches/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/responsibleConductOfResearches"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /responsibleConductOfResearches/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/responsibleConductOfResearches"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        completionDate: FIND_ONE_RESULT.completionDate.toISOString(),
      });
  });

  test("POST /responsibleConductOfResearches existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/responsibleConductOfResearches")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        completionDate: CREATE_RESULT.completionDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/responsibleConductOfResearches")
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
