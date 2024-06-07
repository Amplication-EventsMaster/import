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
import { RawDatumController } from "../rawDatum.controller";
import { RawDatumService } from "../rawDatum.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  advisor: "exampleAdvisor",
  ai: "exampleAi",
  alg: "exampleAlg",
  comments: "exampleComments",
  csys: "exampleCsys",
  el: "exampleEl",
  finish: "exampleFinish",
  fullRecord: "exampleFullRecord",
  id: 42,
  leftProgram: "exampleLeftProgram",
  name: "exampleName",
  notes: "exampleNotes",
  pl: "examplePl",
  programmingReq: "exampleProgrammingReq",
  qualdone: "exampleQualdone",
  sex: "exampleSex",
  speakingReq: "exampleSpeakingReq",
  ss: "exampleSs",
  startSem: "exampleStartSem",
  startYear: 42,
  startYearFull: "exampleStartYearFull",
  teachingReq: "exampleTeachingReq",
  thesisCommittee: "exampleThesisCommittee",
  thesisProposal: "exampleThesisProposal",
  thesisTitle: "exampleThesisTitle",
  undergrad: "exampleUndergrad",
  writingReq: "exampleWritingReq",
  year: 42.42,
  yearFull: "exampleYearFull",
};
const CREATE_RESULT = {
  advisor: "exampleAdvisor",
  ai: "exampleAi",
  alg: "exampleAlg",
  comments: "exampleComments",
  csys: "exampleCsys",
  el: "exampleEl",
  finish: "exampleFinish",
  fullRecord: "exampleFullRecord",
  id: 42,
  leftProgram: "exampleLeftProgram",
  name: "exampleName",
  notes: "exampleNotes",
  pl: "examplePl",
  programmingReq: "exampleProgrammingReq",
  qualdone: "exampleQualdone",
  sex: "exampleSex",
  speakingReq: "exampleSpeakingReq",
  ss: "exampleSs",
  startSem: "exampleStartSem",
  startYear: 42,
  startYearFull: "exampleStartYearFull",
  teachingReq: "exampleTeachingReq",
  thesisCommittee: "exampleThesisCommittee",
  thesisProposal: "exampleThesisProposal",
  thesisTitle: "exampleThesisTitle",
  undergrad: "exampleUndergrad",
  writingReq: "exampleWritingReq",
  year: 42.42,
  yearFull: "exampleYearFull",
};
const FIND_MANY_RESULT = [
  {
    advisor: "exampleAdvisor",
    ai: "exampleAi",
    alg: "exampleAlg",
    comments: "exampleComments",
    csys: "exampleCsys",
    el: "exampleEl",
    finish: "exampleFinish",
    fullRecord: "exampleFullRecord",
    id: 42,
    leftProgram: "exampleLeftProgram",
    name: "exampleName",
    notes: "exampleNotes",
    pl: "examplePl",
    programmingReq: "exampleProgrammingReq",
    qualdone: "exampleQualdone",
    sex: "exampleSex",
    speakingReq: "exampleSpeakingReq",
    ss: "exampleSs",
    startSem: "exampleStartSem",
    startYear: 42,
    startYearFull: "exampleStartYearFull",
    teachingReq: "exampleTeachingReq",
    thesisCommittee: "exampleThesisCommittee",
    thesisProposal: "exampleThesisProposal",
    thesisTitle: "exampleThesisTitle",
    undergrad: "exampleUndergrad",
    writingReq: "exampleWritingReq",
    year: 42.42,
    yearFull: "exampleYearFull",
  },
];
const FIND_ONE_RESULT = {
  advisor: "exampleAdvisor",
  ai: "exampleAi",
  alg: "exampleAlg",
  comments: "exampleComments",
  csys: "exampleCsys",
  el: "exampleEl",
  finish: "exampleFinish",
  fullRecord: "exampleFullRecord",
  id: 42,
  leftProgram: "exampleLeftProgram",
  name: "exampleName",
  notes: "exampleNotes",
  pl: "examplePl",
  programmingReq: "exampleProgrammingReq",
  qualdone: "exampleQualdone",
  sex: "exampleSex",
  speakingReq: "exampleSpeakingReq",
  ss: "exampleSs",
  startSem: "exampleStartSem",
  startYear: 42,
  startYearFull: "exampleStartYearFull",
  teachingReq: "exampleTeachingReq",
  thesisCommittee: "exampleThesisCommittee",
  thesisProposal: "exampleThesisProposal",
  thesisTitle: "exampleThesisTitle",
  undergrad: "exampleUndergrad",
  writingReq: "exampleWritingReq",
  year: 42.42,
  yearFull: "exampleYearFull",
};

const service = {
  createRawDatum() {
    return CREATE_RESULT;
  },
  rawData: () => FIND_MANY_RESULT,
  rawDatum: ({ where }: { where: { id: string } }) => {
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

describe("RawDatum", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: RawDatumService,
          useValue: service,
        },
      ],
      controllers: [RawDatumController],
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

  test("POST /rawData", async () => {
    await request(app.getHttpServer())
      .post("/rawData")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /rawData", async () => {
    await request(app.getHttpServer())
      .get("/rawData")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /rawData/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/rawData"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /rawData/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/rawData"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /rawData existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/rawData")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/rawData")
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
