import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PsyProjectReqService } from "./psyProjectReq.service";
import { PsyProjectReqControllerBase } from "./base/psyProjectReq.controller.base";

@swagger.ApiTags("psyProjectReqs")
@common.Controller("psyProjectReqs")
export class PsyProjectReqController extends PsyProjectReqControllerBase {
  constructor(protected readonly service: PsyProjectReqService) {
    super(service);
  }
}
