import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DegreeStatusService } from "./degreeStatus.service";
import { DegreeStatusControllerBase } from "./base/degreeStatus.controller.base";

@swagger.ApiTags("degreeStatuses")
@common.Controller("degreeStatuses")
export class DegreeStatusController extends DegreeStatusControllerBase {
  constructor(protected readonly service: DegreeStatusService) {
    super(service);
  }
}
