import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StudentDataIniService } from "./studentDataIni.service";
import { StudentDataIniControllerBase } from "./base/studentDataIni.controller.base";

@swagger.ApiTags("studentDataInis")
@common.Controller("studentDataInis")
export class StudentDataIniController extends StudentDataIniControllerBase {
  constructor(protected readonly service: StudentDataIniService) {
    super(service);
  }
}
