import { Module } from "@nestjs/common";
import { AwardModuleBase } from "./base/award.module.base";
import { AwardService } from "./award.service";
import { AwardController } from "./award.controller";
import { AwardResolver } from "./award.resolver";

@Module({
  imports: [AwardModuleBase],
  controllers: [AwardController],
  providers: [AwardService, AwardResolver],
  exports: [AwardService],
})
export class AwardModule {}
