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
import { StudentSkillController } from "../studentSkill.controller";
import { StudentSkillService } from "../studentSkill.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  collab: "exampleCollab",
  comment: "exampleComment",
  date: new Date(),
  grade: "exampleGrade",
  id: 42,
  pending: "true",
  skill: "exampleSkill",
  title: "exampleTitle",
  units: 42,
};
const CREATE_RESULT = {
  collab: "exampleCollab",
  comment: "exampleComment",
  date: new Date(),
  grade: "exampleGrade",
  id: 42,
  pending: "true",
  skill: "exampleSkill",
  title: "exampleTitle",
  units: 42,
};
const FIND_MANY_RESULT = [
  {
    collab: "exampleCollab",
    comment: "exampleComment",
    date: new Date(),
    grade: "exampleGrade",
    id: 42,
    pending: "true",
    skill: "exampleSkill",
    title: "exampleTitle",
    units: 42,
  },
];
const FIND_ONE_RESULT = {
  collab: "exampleCollab",
  comment: "exampleComment",
  date: new Date(),
  grade: "exampleGrade",
  id: 42,
  pending: "true",
  skill: "exampleSkill",
  title: "exampleTitle",
  units: 42,
};

const service = {
  createStudentSkill() {
    return CREATE_RESULT;
  },
  studentSkills: () => FIND_MANY_RESULT,
  studentSkill: ({ where }: { where: { id: string } }) => {
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

describe("StudentSkill", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: StudentSkillService,
          useValue: service,
        },
      ],
      controllers: [StudentSkillController],
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

  test("POST /studentSkills", async () => {
    await request(app.getHttpServer())
      .post("/studentSkills")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        date: CREATE_RESULT.date.toISOString(),
      });
  });

  test("GET /studentSkills", async () => {
    await request(app.getHttpServer())
      .get("/studentSkills")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          date: FIND_MANY_RESULT[0].date.toISOString(),
        },
      ]);
  });

  test("GET /studentSkills/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/studentSkills"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /studentSkills/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/studentSkills"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        date: FIND_ONE_RESULT.date.toISOString(),
      });
  });

  test("POST /studentSkills existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/studentSkills")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        date: CREATE_RESULT.date.toISOString(),
      })
      .then(function () {
        agent
          .post("/studentSkills")
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
