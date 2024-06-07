import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SemesterDateService } from "./semesterDate.service";
import { SemesterDateControllerBase } from "./base/semesterDate.controller.base";

@swagger.ApiTags("semesterDates")
@common.Controller("semesterDates")
export class SemesterDateController extends SemesterDateControllerBase {
  constructor(protected readonly service: SemesterDateService) {
    super(service);
  }
}
