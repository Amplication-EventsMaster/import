import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserRoleProgramService } from "./userRoleProgram.service";
import { UserRoleProgramControllerBase } from "./base/userRoleProgram.controller.base";

@swagger.ApiTags("userRolePrograms")
@common.Controller("userRolePrograms")
export class UserRoleProgramController extends UserRoleProgramControllerBase {
  constructor(protected readonly service: UserRoleProgramService) {
    super(service);
  }
}
