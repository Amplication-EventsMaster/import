import { Module } from "@nestjs/common";
import { SemesterDateModuleBase } from "./base/semesterDate.module.base";
import { SemesterDateService } from "./semesterDate.service";
import { SemesterDateController } from "./semesterDate.controller";
import { SemesterDateResolver } from "./semesterDate.resolver";

@Module({
  imports: [SemesterDateModuleBase],
  controllers: [SemesterDateController],
  providers: [SemesterDateService, SemesterDateResolver],
  exports: [SemesterDateService],
})
export class SemesterDateModule {}
