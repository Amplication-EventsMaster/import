import { Module } from "@nestjs/common";
import { SemesterDateOverrideModuleBase } from "./base/semesterDateOverride.module.base";
import { SemesterDateOverrideService } from "./semesterDateOverride.service";
import { SemesterDateOverrideController } from "./semesterDateOverride.controller";
import { SemesterDateOverrideResolver } from "./semesterDateOverride.resolver";

@Module({
  imports: [SemesterDateOverrideModuleBase],
  controllers: [SemesterDateOverrideController],
  providers: [SemesterDateOverrideService, SemesterDateOverrideResolver],
  exports: [SemesterDateOverrideService],
})
export class SemesterDateOverrideModule {}
