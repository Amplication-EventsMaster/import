import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CommitteeServiceService } from "./committeeService.service";
import { CommitteeServiceControllerBase } from "./base/committeeService.controller.base";

@swagger.ApiTags("committeeServices")
@common.Controller("committeeServices")
export class CommitteeServiceController extends CommitteeServiceControllerBase {
  constructor(protected readonly service: CommitteeServiceService) {
    super(service);
  }
}
