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
import { StudentPubController } from "../studentPub.controller";
import { StudentPubService } from "../studentPub.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  authors: "exampleAuthors",
  citation: "exampleCitation",
  forum: "exampleForum",
  id: 42,
  pubDate: new Date(),
  sfId: 42,
  status: "exampleStatus",
  title: "exampleTitle",
  url: "exampleUrl",
};
const CREATE_RESULT = {
  authors: "exampleAuthors",
  citation: "exampleCitation",
  forum: "exampleForum",
  id: 42,
  pubDate: new Date(),
  sfId: 42,
  status: "exampleStatus",
  title: "exampleTitle",
  url: "exampleUrl",
};
const FIND_MANY_RESULT = [
  {
    authors: "exampleAuthors",
    citation: "exampleCitation",
    forum: "exampleForum",
    id: 42,
    pubDate: new Date(),
    sfId: 42,
    status: "exampleStatus",
    title: "exampleTitle",
    url: "exampleUrl",
  },
];
const FIND_ONE_RESULT = {
  authors: "exampleAuthors",
  citation: "exampleCitation",
  forum: "exampleForum",
  id: 42,
  pubDate: new Date(),
  sfId: 42,
  status: "exampleStatus",
  title: "exampleTitle",
  url: "exampleUrl",
};

const service = {
  createStudentPub() {
    return CREATE_RESULT;
  },
  studentPubs: () => FIND_MANY_RESULT,
  studentPub: ({ where }: { where: { id: string } }) => {
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

describe("StudentPub", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: StudentPubService,
          useValue: service,
        },
      ],
      controllers: [StudentPubController],
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

  test("POST /studentPubs", async () => {
    await request(app.getHttpServer())
      .post("/studentPubs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        pubDate: CREATE_RESULT.pubDate.toISOString(),
      });
  });

  test("GET /studentPubs", async () => {
    await request(app.getHttpServer())
      .get("/studentPubs")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          pubDate: FIND_MANY_RESULT[0].pubDate.toISOString(),
        },
      ]);
  });

  test("GET /studentPubs/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/studentPubs"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /studentPubs/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/studentPubs"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        pubDate: FIND_ONE_RESULT.pubDate.toISOString(),
      });
  });

  test("POST /studentPubs existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/studentPubs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        pubDate: CREATE_RESULT.pubDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/studentPubs")
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
