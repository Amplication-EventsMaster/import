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
import { LegacyRequirementController } from "../legacyRequirement.controller";
import { LegacyRequirementService } from "../legacyRequirement.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  course: "exampleCourse",
  id: 42,
  requirementTitle: "exampleRequirementTitle",
  requirementType: "exampleRequirementType",
};
const CREATE_RESULT = {
  course: "exampleCourse",
  id: 42,
  requirementTitle: "exampleRequirementTitle",
  requirementType: "exampleRequirementType",
};
const FIND_MANY_RESULT = [
  {
    course: "exampleCourse",
    id: 42,
    requirementTitle: "exampleRequirementTitle",
    requirementType: "exampleRequirementType",
  },
];
const FIND_ONE_RESULT = {
  course: "exampleCourse",
  id: 42,
  requirementTitle: "exampleRequirementTitle",
  requirementType: "exampleRequirementType",
};

const service = {
  createLegacyRequirement() {
    return CREATE_RESULT;
  },
  legacyRequirements: () => FIND_MANY_RESULT,
  legacyRequirement: ({ where }: { where: { id: string } }) => {
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

describe("LegacyRequirement", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: LegacyRequirementService,
          useValue: service,
        },
      ],
      controllers: [LegacyRequirementController],
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

  test("POST /legacyRequirements", async () => {
    await request(app.getHttpServer())
      .post("/legacyRequirements")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /legacyRequirements", async () => {
    await request(app.getHttpServer())
      .get("/legacyRequirements")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /legacyRequirements/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/legacyRequirements"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /legacyRequirements/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/legacyRequirements"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /legacyRequirements existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/legacyRequirements")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/legacyRequirements")
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
