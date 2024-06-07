import { Module } from "@nestjs/common";
import { CommitteeServiceModuleBase } from "./base/committeeService.module.base";
import { CommitteeServiceService } from "./committeeService.service";
import { CommitteeServiceController } from "./committeeService.controller";
import { CommitteeServiceResolver } from "./committeeService.resolver";

@Module({
  imports: [CommitteeServiceModuleBase],
  controllers: [CommitteeServiceController],
  providers: [CommitteeServiceService, CommitteeServiceResolver],
  exports: [CommitteeServiceService],
})
export class CommitteeServiceModule {}
