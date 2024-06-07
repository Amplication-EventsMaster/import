import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StudentFileService } from "./studentFile.service";
import { StudentFileControllerBase } from "./base/studentFile.controller.base";

@swagger.ApiTags("studentFiles")
@common.Controller("studentFiles")
export class StudentFileController extends StudentFileControllerBase {
  constructor(protected readonly service: StudentFileService) {
    super(service);
  }
}
