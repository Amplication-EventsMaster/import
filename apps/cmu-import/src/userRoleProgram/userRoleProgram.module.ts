import { Module } from "@nestjs/common";
import { UserRoleProgramModuleBase } from "./base/userRoleProgram.module.base";
import { UserRoleProgramService } from "./userRoleProgram.service";
import { UserRoleProgramController } from "./userRoleProgram.controller";
import { UserRoleProgramResolver } from "./userRoleProgram.resolver";

@Module({
  imports: [UserRoleProgramModuleBase],
  controllers: [UserRoleProgramController],
  providers: [UserRoleProgramService, UserRoleProgramResolver],
  exports: [UserRoleProgramService],
})
export class UserRoleProgramModule {}
