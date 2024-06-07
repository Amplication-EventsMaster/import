import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StudentDatumService } from "./studentDatum.service";
import { StudentDatumControllerBase } from "./base/studentDatum.controller.base";

@swagger.ApiTags("studentData")
@common.Controller("studentData")
export class StudentDatumController extends StudentDatumControllerBase {
  constructor(protected readonly service: StudentDatumService) {
    super(service);
  }
}
