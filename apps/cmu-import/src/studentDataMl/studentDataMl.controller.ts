import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StudentDataMlService } from "./studentDataMl.service";
import { StudentDataMlControllerBase } from "./base/studentDataMl.controller.base";

@swagger.ApiTags("studentDataMls")
@common.Controller("studentDataMls")
export class StudentDataMlController extends StudentDataMlControllerBase {
  constructor(protected readonly service: StudentDataMlService) {
    super(service);
  }
}
