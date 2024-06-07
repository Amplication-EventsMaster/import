import { Module } from "@nestjs/common";
import { UsersOverrideModuleBase } from "./base/usersOverride.module.base";
import { UsersOverrideService } from "./usersOverride.service";
import { UsersOverrideController } from "./usersOverride.controller";
import { UsersOverrideResolver } from "./usersOverride.resolver";

@Module({
  imports: [UsersOverrideModuleBase],
  controllers: [UsersOverrideController],
  providers: [UsersOverrideService, UsersOverrideResolver],
  exports: [UsersOverrideService],
})
export class UsersOverrideModule {}
