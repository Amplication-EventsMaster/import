import { Module } from "@nestjs/common";
import { AdvisorsCopyModuleBase } from "./base/advisorsCopy.module.base";
import { AdvisorsCopyService } from "./advisorsCopy.service";
import { AdvisorsCopyController } from "./advisorsCopy.controller";
import { AdvisorsCopyResolver } from "./advisorsCopy.resolver";

@Module({
  imports: [AdvisorsCopyModuleBase],
  controllers: [AdvisorsCopyController],
  providers: [AdvisorsCopyService, AdvisorsCopyResolver],
  exports: [AdvisorsCopyService],
})
export class AdvisorsCopyModule {}
