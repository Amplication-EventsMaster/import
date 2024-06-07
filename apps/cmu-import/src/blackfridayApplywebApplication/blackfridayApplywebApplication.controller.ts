import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BlackfridayApplywebApplicationService } from "./blackfridayApplywebApplication.service";
import { BlackfridayApplywebApplicationControllerBase } from "./base/blackfridayApplywebApplication.controller.base";

@swagger.ApiTags("blackfridayApplywebApplications")
@common.Controller("blackfridayApplywebApplications")
export class BlackfridayApplywebApplicationController extends BlackfridayApplywebApplicationControllerBase {
  constructor(
    protected readonly service: BlackfridayApplywebApplicationService
  ) {
    super(service);
  }
}
