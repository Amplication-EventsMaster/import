import { Module } from "@nestjs/common";
import { FellowshipModuleBase } from "./base/fellowship.module.base";
import { FellowshipService } from "./fellowship.service";
import { FellowshipController } from "./fellowship.controller";
import { FellowshipResolver } from "./fellowship.resolver";

@Module({
  imports: [FellowshipModuleBase],
  controllers: [FellowshipController],
  providers: [FellowshipService, FellowshipResolver],
  exports: [FellowshipService],
})
export class FellowshipModule {}
