import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TeachingReqService } from "./teachingReq.service";
import { TeachingReqControllerBase } from "./base/teachingReq.controller.base";

@swagger.ApiTags("teachingReqs")
@common.Controller("teachingReqs")
export class TeachingReqController extends TeachingReqControllerBase {
  constructor(protected readonly service: TeachingReqService) {
    super(service);
  }
}
