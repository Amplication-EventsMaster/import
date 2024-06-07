import { Module } from "@nestjs/common";
import { AdvisorModuleBase } from "./base/advisor.module.base";
import { AdvisorService } from "./advisor.service";
import { AdvisorController } from "./advisor.controller";
import { AdvisorResolver } from "./advisor.resolver";

@Module({
  imports: [AdvisorModuleBase],
  controllers: [AdvisorController],
  providers: [AdvisorService, AdvisorResolver],
  exports: [AdvisorService],
})
export class AdvisorModule {}
