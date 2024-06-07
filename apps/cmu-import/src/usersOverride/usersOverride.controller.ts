import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UsersOverrideService } from "./usersOverride.service";
import { UsersOverrideControllerBase } from "./base/usersOverride.controller.base";

@swagger.ApiTags("usersOverrides")
@common.Controller("usersOverrides")
export class UsersOverrideController extends UsersOverrideControllerBase {
  constructor(protected readonly service: UsersOverrideService) {
    super(service);
  }
}
