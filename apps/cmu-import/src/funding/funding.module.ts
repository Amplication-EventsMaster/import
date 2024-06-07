import { Module } from "@nestjs/common";
import { FundingModuleBase } from "./base/funding.module.base";
import { FundingService } from "./funding.service";
import { FundingController } from "./funding.controller";
import { FundingResolver } from "./funding.resolver";

@Module({
  imports: [FundingModuleBase],
  controllers: [FundingController],
  providers: [FundingService, FundingResolver],
  exports: [FundingService],
})
export class FundingModule {}
