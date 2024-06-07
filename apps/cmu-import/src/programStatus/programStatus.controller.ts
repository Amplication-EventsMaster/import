import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProgramStatusService } from "./programStatus.service";
import { ProgramStatusControllerBase } from "./base/programStatus.controller.base";

@swagger.ApiTags("programStatuses")
@common.Controller("programStatuses")
export class ProgramStatusController extends ProgramStatusControllerBase {
  constructor(protected readonly service: ProgramStatusService) {
    super(service);
  }
}
