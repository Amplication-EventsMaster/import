import { Module } from "@nestjs/common";
import { ReportModuleBase } from "./base/report.module.base";
import { ReportService } from "./report.service";
import { ReportController } from "./report.controller";
import { ReportResolver } from "./report.resolver";

@Module({
  imports: [ReportModuleBase],
  controllers: [ReportController],
  providers: [ReportService, ReportResolver],
  exports: [ReportService],
})
export class ReportModule {}
