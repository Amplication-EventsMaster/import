import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserRoleLookupService } from "./userRoleLookup.service";
import { UserRoleLookupControllerBase } from "./base/userRoleLookup.controller.base";

@swagger.ApiTags("userRoleLookups")
@common.Controller("userRoleLookups")
export class UserRoleLookupController extends UserRoleLookupControllerBase {
  constructor(protected readonly service: UserRoleLookupService) {
    super(service);
  }
}
