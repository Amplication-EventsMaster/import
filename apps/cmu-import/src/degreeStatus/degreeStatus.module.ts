import { Module } from "@nestjs/common";
import { DegreeStatusModuleBase } from "./base/degreeStatus.module.base";
import { DegreeStatusService } from "./degreeStatus.service";
import { DegreeStatusController } from "./degreeStatus.controller";
import { DegreeStatusResolver } from "./degreeStatus.resolver";

@Module({
  imports: [DegreeStatusModuleBase],
  controllers: [DegreeStatusController],
  providers: [DegreeStatusService, DegreeStatusResolver],
  exports: [DegreeStatusService],
})
export class DegreeStatusModule {}
