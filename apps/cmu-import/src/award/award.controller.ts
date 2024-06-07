import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AwardService } from "./award.service";
import { AwardControllerBase } from "./base/award.controller.base";

@swagger.ApiTags("awards")
@common.Controller("awards")
export class AwardController extends AwardControllerBase {
  constructor(protected readonly service: AwardService) {
    super(service);
  }
}
