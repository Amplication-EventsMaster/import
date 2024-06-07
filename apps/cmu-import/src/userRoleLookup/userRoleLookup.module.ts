import { Module } from "@nestjs/common";
import { UserRoleLookupModuleBase } from "./base/userRoleLookup.module.base";
import { UserRoleLookupService } from "./userRoleLookup.service";
import { UserRoleLookupController } from "./userRoleLookup.controller";
import { UserRoleLookupResolver } from "./userRoleLookup.resolver";

@Module({
  imports: [UserRoleLookupModuleBase],
  controllers: [UserRoleLookupController],
  providers: [UserRoleLookupService, UserRoleLookupResolver],
  exports: [UserRoleLookupService],
})
export class UserRoleLookupModule {}
