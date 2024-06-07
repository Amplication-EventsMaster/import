import { Module } from "@nestjs/common";
import { ResponsibleConductOfResearchModuleBase } from "./base/responsibleConductOfResearch.module.base";
import { ResponsibleConductOfResearchService } from "./responsibleConductOfResearch.service";
import { ResponsibleConductOfResearchController } from "./responsibleConductOfResearch.controller";
import { ResponsibleConductOfResearchResolver } from "./responsibleConductOfResearch.resolver";

@Module({
  imports: [ResponsibleConductOfResearchModuleBase],
  controllers: [ResponsibleConductOfResearchController],
  providers: [
    ResponsibleConductOfResearchService,
    ResponsibleConductOfResearchResolver,
  ],
  exports: [ResponsibleConductOfResearchService],
})
export class ResponsibleConductOfResearchModule {}
