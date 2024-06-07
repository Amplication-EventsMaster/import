import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FacultyDatumService } from "./facultyDatum.service";
import { FacultyDatumControllerBase } from "./base/facultyDatum.controller.base";

@swagger.ApiTags("facultyData")
@common.Controller("facultyData")
export class FacultyDatumController extends FacultyDatumControllerBase {
  constructor(protected readonly service: FacultyDatumService) {
    super(service);
  }
}
