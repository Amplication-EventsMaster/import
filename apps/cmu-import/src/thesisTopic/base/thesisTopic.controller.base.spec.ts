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
import { ThesisTopicController } from "../thesisTopic.controller";
import { ThesisTopicService } from "../thesisTopic.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  date: new Date(),
  defenseComplete: "true",
  defenseDate: new Date(),
  defensePending: "true",
  defenseTitle: "exampleDefenseTitle",
  id: 42,
  pending: "true",
  proposalComplete: "true",
  title: "exampleTitle",
};
const CREATE_RESULT = {
  date: new Date(),
  defenseComplete: "true",
  defenseDate: new Date(),
  defensePending: "true",
  defenseTitle: "exampleDefenseTitle",
  id: 42,
  pending: "true",
  proposalComplete: "true",
  title: "exampleTitle",
};
const FIND_MANY_RESULT = [
  {
    date: new Date(),
    defenseComplete: "true",
    defenseDate: new Date(),
    defensePending: "true",
    defenseTitle: "exampleDefenseTitle",
    id: 42,
    pending: "true",
    proposalComplete: "true",
    title: "exampleTitle",
  },
];
const FIND_ONE_RESULT = {
  date: new Date(),
  defenseComplete: "true",
  defenseDate: new Date(),
  defensePending: "true",
  defenseTitle: "exampleDefenseTitle",
  id: 42,
  pending: "true",
  proposalComplete: "true",
  title: "exampleTitle",
};

const service = {
  createThesisTopic() {
    return CREATE_RESULT;
  },
  thesisTopics: () => FIND_MANY_RESULT,
  thesisTopic: ({ where }: { where: { id: string } }) => {
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

describe("ThesisTopic", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ThesisTopicService,
          useValue: service,
        },
      ],
      controllers: [ThesisTopicController],
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

  test("POST /thesisTopics", async () => {
    await request(app.getHttpServer())
      .post("/thesisTopics")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        date: CREATE_RESULT.date.toISOString(),
        defenseDate: CREATE_RESULT.defenseDate.toISOString(),
      });
  });

  test("GET /thesisTopics", async () => {
    await request(app.getHttpServer())
      .get("/thesisTopics")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          date: FIND_MANY_RESULT[0].date.toISOString(),
          defenseDate: FIND_MANY_RESULT[0].defenseDate.toISOString(),
        },
      ]);
  });

  test("GET /thesisTopics/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/thesisTopics"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /thesisTopics/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/thesisTopics"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        date: FIND_ONE_RESULT.date.toISOString(),
        defenseDate: FIND_ONE_RESULT.defenseDate.toISOString(),
      });
  });

  test("POST /thesisTopics existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/thesisTopics")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        date: CREATE_RESULT.date.toISOString(),
        defenseDate: CREATE_RESULT.defenseDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/thesisTopics")
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
