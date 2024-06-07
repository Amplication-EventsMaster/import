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
import { AwardController } from "../award.controller";
import { AwardService } from "../award.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  awardDate: new Date(),
  awardName: "exampleAwardName",
  id: 42,
  pending: "true",
};
const CREATE_RESULT = {
  awardDate: new Date(),
  awardName: "exampleAwardName",
  id: 42,
  pending: "true",
};
const FIND_MANY_RESULT = [
  {
    awardDate: new Date(),
    awardName: "exampleAwardName",
    id: 42,
    pending: "true",
  },
];
const FIND_ONE_RESULT = {
  awardDate: new Date(),
  awardName: "exampleAwardName",
  id: 42,
  pending: "true",
};

const service = {
  createAward() {
    return CREATE_RESULT;
  },
  awards: () => FIND_MANY_RESULT,
  award: ({ where }: { where: { id: string } }) => {
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

describe("Award", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: AwardService,
          useValue: service,
        },
      ],
      controllers: [AwardController],
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

  test("POST /awards", async () => {
    await request(app.getHttpServer())
      .post("/awards")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        awardDate: CREATE_RESULT.awardDate.toISOString(),
      });
  });

  test("GET /awards", async () => {
    await request(app.getHttpServer())
      .get("/awards")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          awardDate: FIND_MANY_RESULT[0].awardDate.toISOString(),
        },
      ]);
  });

  test("GET /awards/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/awards"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /awards/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/awards"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        awardDate: FIND_ONE_RESULT.awardDate.toISOString(),
      });
  });

  test("POST /awards existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/awards")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        awardDate: CREATE_RESULT.awardDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/awards")
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
