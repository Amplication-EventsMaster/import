import { Module } from "@nestjs/common";
import { StudentOverrideModuleBase } from "./base/studentOverride.module.base";
import { StudentOverrideService } from "./studentOverride.service";
import { StudentOverrideController } from "./studentOverride.controller";
import { StudentOverrideResolver } from "./studentOverride.resolver";

@Module({
  imports: [StudentOverrideModuleBase],
  controllers: [StudentOverrideController],
  providers: [StudentOverrideService, StudentOverrideResolver],
  exports: [StudentOverrideService],
})
export class StudentOverrideModule {}
