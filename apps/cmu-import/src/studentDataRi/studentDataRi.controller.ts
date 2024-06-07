import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StudentDataRiService } from "./studentDataRi.service";
import { StudentDataRiControllerBase } from "./base/studentDataRi.controller.base";

@swagger.ApiTags("studentDataRis")
@common.Controller("studentDataRis")
export class StudentDataRiController extends StudentDataRiControllerBase {
  constructor(protected readonly service: StudentDataRiService) {
    super(service);
  }
}
