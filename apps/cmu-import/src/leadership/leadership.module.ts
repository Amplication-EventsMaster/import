import { Module } from "@nestjs/common";
import { LeadershipModuleBase } from "./base/leadership.module.base";
import { LeadershipService } from "./leadership.service";
import { LeadershipController } from "./leadership.controller";
import { LeadershipResolver } from "./leadership.resolver";

@Module({
  imports: [LeadershipModuleBase],
  controllers: [LeadershipController],
  providers: [LeadershipService, LeadershipResolver],
  exports: [LeadershipService],
})
export class LeadershipModule {}
