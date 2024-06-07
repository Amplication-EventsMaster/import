import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserHostService } from "./userHost.service";
import { UserHostControllerBase } from "./base/userHost.controller.base";

@swagger.ApiTags("userHosts")
@common.Controller("userHosts")
export class UserHostController extends UserHostControllerBase {
  constructor(protected readonly service: UserHostService) {
    super(service);
  }
}
