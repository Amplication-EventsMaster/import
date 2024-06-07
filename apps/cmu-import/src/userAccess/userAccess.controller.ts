import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserAccessService } from "./userAccess.service";
import { UserAccessControllerBase } from "./base/userAccess.controller.base";

@swagger.ApiTags("userAccesses")
@common.Controller("userAccesses")
export class UserAccessController extends UserAccessControllerBase {
  constructor(protected readonly service: UserAccessService) {
    super(service);
  }
}
