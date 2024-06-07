import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ExpNeuroReqService } from "./expNeuroReq.service";
import { ExpNeuroReqControllerBase } from "./base/expNeuroReq.controller.base";

@swagger.ApiTags("expNeuroReqs")
@common.Controller("expNeuroReqs")
export class ExpNeuroReqController extends ExpNeuroReqControllerBase {
  constructor(protected readonly service: ExpNeuroReqService) {
    super(service);
  }
}
