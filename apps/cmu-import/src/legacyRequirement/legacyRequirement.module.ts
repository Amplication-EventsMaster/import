import { Module } from "@nestjs/common";
import { LegacyRequirementModuleBase } from "./base/legacyRequirement.module.base";
import { LegacyRequirementService } from "./legacyRequirement.service";
import { LegacyRequirementController } from "./legacyRequirement.controller";
import { LegacyRequirementResolver } from "./legacyRequirement.resolver";

@Module({
  imports: [LegacyRequirementModuleBase],
  controllers: [LegacyRequirementController],
  providers: [LegacyRequirementService, LegacyRequirementResolver],
  exports: [LegacyRequirementService],
})
export class LegacyRequirementModule {}
