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
import { StudentFileController } from "../studentFile.controller";
import { StudentFileService } from "../studentFile.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  fileChanges: 42,
  fileDate: new Date(),
  fileDesc: "exampleFileDesc",
  fileName: "exampleFileName",
  fileType: "exampleFileType",
  id: 42,
};
const CREATE_RESULT = {
  fileChanges: 42,
  fileDate: new Date(),
  fileDesc: "exampleFileDesc",
  fileName: "exampleFileName",
  fileType: "exampleFileType",
  id: 42,
};
const FIND_MANY_RESULT = [
  {
    fileChanges: 42,
    fileDate: new Date(),
    fileDesc: "exampleFileDesc",
    fileName: "exampleFileName",
    fileType: "exampleFileType",
    id: 42,
  },
];
const FIND_ONE_RESULT = {
  fileChanges: 42,
  fileDate: new Date(),
  fileDesc: "exampleFileDesc",
  fileName: "exampleFileName",
  fileType: "exampleFileType",
  id: 42,
};

const service = {
  createStudentFile() {
    return CREATE_RESULT;
  },
  studentFiles: () => FIND_MANY_RESULT,
  studentFile: ({ where }: { where: { id: string } }) => {
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

describe("StudentFile", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: StudentFileService,
          useValue: service,
        },
      ],
      controllers: [StudentFileController],
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

  test("POST /studentFiles", async () => {
    await request(app.getHttpServer())
      .post("/studentFiles")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        fileDate: CREATE_RESULT.fileDate.toISOString(),
      });
  });

  test("GET /studentFiles", async () => {
    await request(app.getHttpServer())
      .get("/studentFiles")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          fileDate: FIND_MANY_RESULT[0].fileDate.toISOString(),
        },
      ]);
  });

  test("GET /studentFiles/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/studentFiles"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /studentFiles/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/studentFiles"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        fileDate: FIND_ONE_RESULT.fileDate.toISOString(),
      });
  });

  test("POST /studentFiles existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/studentFiles")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        fileDate: CREATE_RESULT.fileDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/studentFiles")
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
