import { Module } from "@nestjs/common";
import { UserAccessModuleBase } from "./base/userAccess.module.base";
import { UserAccessService } from "./userAccess.service";
import { UserAccessController } from "./userAccess.controller";
import { UserAccessResolver } from "./userAccess.resolver";

@Module({
  imports: [UserAccessModuleBase],
  controllers: [UserAccessController],
  providers: [UserAccessService, UserAccessResolver],
  exports: [UserAccessService],
})
export class UserAccessModule {}
