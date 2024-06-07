import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AdvisorService } from "./advisor.service";
import { AdvisorControllerBase } from "./base/advisor.controller.base";

@swagger.ApiTags("advisors")
@common.Controller("advisors")
export class AdvisorController extends AdvisorControllerBase {
  constructor(protected readonly service: AdvisorService) {
    super(service);
  }
}
