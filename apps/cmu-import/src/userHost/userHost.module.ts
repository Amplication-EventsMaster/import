import { Module } from "@nestjs/common";
import { UserHostModuleBase } from "./base/userHost.module.base";
import { UserHostService } from "./userHost.service";
import { UserHostController } from "./userHost.controller";
import { UserHostResolver } from "./userHost.resolver";

@Module({
  imports: [UserHostModuleBase],
  controllers: [UserHostController],
  providers: [UserHostService, UserHostResolver],
  exports: [UserHostService],
})
export class UserHostModule {}
