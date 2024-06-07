import { Module } from "@nestjs/common";
import { ReportColumnModuleBase } from "./base/reportColumn.module.base";
import { ReportColumnService } from "./reportColumn.service";
import { ReportColumnController } from "./reportColumn.controller";
import { ReportColumnResolver } from "./reportColumn.resolver";

@Module({
  imports: [ReportColumnModuleBase],
  controllers: [ReportColumnController],
  providers: [ReportColumnService, ReportColumnResolver],
  exports: [ReportColumnService],
})
export class ReportColumnModule {}
