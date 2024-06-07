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
import { ProjectTopicController } from "../projectTopic.controller";
import { ProjectTopicService } from "../projectTopic.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  area: "exampleArea",
  clientName: "exampleClientName",
  date: new Date(),
  id: 42,
  notes: "exampleNotes",
  teamName: "exampleTeamName",
  title: "exampleTitle",
};
const CREATE_RESULT = {
  area: "exampleArea",
  clientName: "exampleClientName",
  date: new Date(),
  id: 42,
  notes: "exampleNotes",
  teamName: "exampleTeamName",
  title: "exampleTitle",
};
const FIND_MANY_RESULT = [
  {
    area: "exampleArea",
    clientName: "exampleClientName",
    date: new Date(),
    id: 42,
    notes: "exampleNotes",
    teamName: "exampleTeamName",
    title: "exampleTitle",
  },
];
const FIND_ONE_RESULT = {
  area: "exampleArea",
  clientName: "exampleClientName",
  date: new Date(),
  id: 42,
  notes: "exampleNotes",
  teamName: "exampleTeamName",
  title: "exampleTitle",
};

const service = {
  createProjectTopic() {
    return CREATE_RESULT;
  },
  projectTopics: () => FIND_MANY_RESULT,
  projectTopic: ({ where }: { where: { id: string } }) => {
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

describe("ProjectTopic", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ProjectTopicService,
          useValue: service,
        },
      ],
      controllers: [ProjectTopicController],
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

  test("POST /projectTopics", async () => {
    await request(app.getHttpServer())
      .post("/projectTopics")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        date: CREATE_RESULT.date.toISOString(),
      });
  });

  test("GET /projectTopics", async () => {
    await request(app.getHttpServer())
      .get("/projectTopics")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          date: FIND_MANY_RESULT[0].date.toISOString(),
        },
      ]);
  });

  test("GET /projectTopics/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/projectTopics"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /projectTopics/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/projectTopics"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        date: FIND_ONE_RESULT.date.toISOString(),
      });
  });

  test("POST /projectTopics existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/projectTopics")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        date: CREATE_RESULT.date.toISOString(),
      })
      .then(function () {
        agent
          .post("/projectTopics")
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
