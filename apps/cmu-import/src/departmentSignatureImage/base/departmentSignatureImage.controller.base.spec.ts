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
import { DepartmentSignatureImageController } from "../departmentSignatureImage.controller";
import { DepartmentSignatureImageService } from "../departmentSignatureImage.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  displayOrder: 42,
  dsigId: 42,
  fileDate: new Date(),
  fileName: "exampleFileName",
  fileSize: 42,
  fileType: "exampleFileType",
  id: 42,
  signatureName: "exampleSignatureName",
};
const CREATE_RESULT = {
  displayOrder: 42,
  dsigId: 42,
  fileDate: new Date(),
  fileName: "exampleFileName",
  fileSize: 42,
  fileType: "exampleFileType",
  id: 42,
  signatureName: "exampleSignatureName",
};
const FIND_MANY_RESULT = [
  {
    displayOrder: 42,
    dsigId: 42,
    fileDate: new Date(),
    fileName: "exampleFileName",
    fileSize: 42,
    fileType: "exampleFileType",
    id: 42,
    signatureName: "exampleSignatureName",
  },
];
const FIND_ONE_RESULT = {
  displayOrder: 42,
  dsigId: 42,
  fileDate: new Date(),
  fileName: "exampleFileName",
  fileSize: 42,
  fileType: "exampleFileType",
  id: 42,
  signatureName: "exampleSignatureName",
};

const service = {
  createDepartmentSignatureImage() {
    return CREATE_RESULT;
  },
  departmentSignatureImages: () => FIND_MANY_RESULT,
  departmentSignatureImage: ({ where }: { where: { id: string } }) => {
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

describe("DepartmentSignatureImage", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: DepartmentSignatureImageService,
          useValue: service,
        },
      ],
      controllers: [DepartmentSignatureImageController],
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

  test("POST /departmentSignatureImages", async () => {
    await request(app.getHttpServer())
      .post("/departmentSignatureImages")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        fileDate: CREATE_RESULT.fileDate.toISOString(),
      });
  });

  test("GET /departmentSignatureImages", async () => {
    await request(app.getHttpServer())
      .get("/departmentSignatureImages")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          fileDate: FIND_MANY_RESULT[0].fileDate.toISOString(),
        },
      ]);
  });

  test("GET /departmentSignatureImages/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/departmentSignatureImages"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /departmentSignatureImages/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/departmentSignatureImages"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        fileDate: FIND_ONE_RESULT.fileDate.toISOString(),
      });
  });

  test("POST /departmentSignatureImages existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/departmentSignatureImages")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        fileDate: CREATE_RESULT.fileDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/departmentSignatureImages")
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
