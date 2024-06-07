import { Module } from "@nestjs/common";
import { FellowshipTitleModuleBase } from "./base/fellowshipTitle.module.base";
import { FellowshipTitleService } from "./fellowshipTitle.service";
import { FellowshipTitleController } from "./fellowshipTitle.controller";
import { FellowshipTitleResolver } from "./fellowshipTitle.resolver";

@Module({
  imports: [FellowshipTitleModuleBase],
  controllers: [FellowshipTitleController],
  providers: [FellowshipTitleService, FellowshipTitleResolver],
  exports: [FellowshipTitleService],
})
export class FellowshipTitleModule {}
