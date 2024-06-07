import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FundingService } from "./funding.service";
import { FundingControllerBase } from "./base/funding.controller.base";

@swagger.ApiTags("fundings")
@common.Controller("fundings")
export class FundingController extends FundingControllerBase {
  constructor(protected readonly service: FundingService) {
    super(service);
  }
}
