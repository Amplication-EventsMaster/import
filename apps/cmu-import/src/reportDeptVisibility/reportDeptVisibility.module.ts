import { Module } from "@nestjs/common";
import { ReportDeptVisibilityModuleBase } from "./base/reportDeptVisibility.module.base";
import { ReportDeptVisibilityService } from "./reportDeptVisibility.service";
import { ReportDeptVisibilityController } from "./reportDeptVisibility.controller";
import { ReportDeptVisibilityResolver } from "./reportDeptVisibility.resolver";

@Module({
  imports: [ReportDeptVisibilityModuleBase],
  controllers: [ReportDeptVisibilityController],
  providers: [ReportDeptVisibilityService, ReportDeptVisibilityResolver],
  exports: [ReportDeptVisibilityService],
})
export class ReportDeptVisibilityModule {}
