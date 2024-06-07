import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ApplywebApplicationService } from "./applywebApplication.service";
import { ApplywebApplicationControllerBase } from "./base/applywebApplication.controller.base";

@swagger.ApiTags("applywebApplications")
@common.Controller("applywebApplications")
export class ApplywebApplicationController extends ApplywebApplicationControllerBase {
  constructor(protected readonly service: ApplywebApplicationService) {
    super(service);
  }
}
