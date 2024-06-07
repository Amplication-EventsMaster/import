import { Module } from "@nestjs/common";
import { QualsResearchModuleBase } from "./base/qualsResearch.module.base";
import { QualsResearchService } from "./qualsResearch.service";
import { QualsResearchController } from "./qualsResearch.controller";
import { QualsResearchResolver } from "./qualsResearch.resolver";

@Module({
  imports: [QualsResearchModuleBase],
  controllers: [QualsResearchController],
  providers: [QualsResearchService, QualsResearchResolver],
  exports: [QualsResearchService],
})
export class QualsResearchModule {}
