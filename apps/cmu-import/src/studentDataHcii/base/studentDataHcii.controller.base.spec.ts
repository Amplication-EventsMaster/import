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
import { StudentDataHciiController } from "../studentDataHcii.controller";
import { StudentDataHciiService } from "../studentDataHcii.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  uploadDate: new Date(),
};
const CREATE_RESULT = {
  id: "exampleId",
  uploadDate: new Date(),
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    uploadDate: new Date(),
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  uploadDate: new Date(),
};

const service = {
  createStudentDataHcii() {
    return CREATE_RESULT;
  },
  studentDataHciis: () => FIND_MANY_RESULT,
  studentDataHcii: ({ where }: { where: { id: string } }) => {
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

describe("StudentDataHcii", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: StudentDataHciiService,
          useValue: service,
        },
      ],
      controllers: [StudentDataHciiController],
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

  test("POST /studentDataHciis", async () => {
    await request(app.getHttpServer())
      .post("/studentDataHciis")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        uploadDate: CREATE_RESULT.uploadDate.toISOString(),
      });
  });

  test("GET /studentDataHciis", async () => {
    await request(app.getHttpServer())
      .get("/studentDataHciis")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          uploadDate: FIND_MANY_RESULT[0].uploadDate.toISOString(),
        },
      ]);
  });

  test("GET /studentDataHciis/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/studentDataHciis"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /studentDataHciis/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/studentDataHciis"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        uploadDate: FIND_ONE_RESULT.uploadDate.toISOString(),
      });
  });

  test("POST /studentDataHciis existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/studentDataHciis")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        uploadDate: CREATE_RESULT.uploadDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/studentDataHciis")
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
