import { Module } from "@nestjs/common";
import { QualsCommitteeModuleBase } from "./base/qualsCommittee.module.base";
import { QualsCommitteeService } from "./qualsCommittee.service";
import { QualsCommitteeController } from "./qualsCommittee.controller";
import { QualsCommitteeResolver } from "./qualsCommittee.resolver";

@Module({
  imports: [QualsCommitteeModuleBase],
  controllers: [QualsCommitteeController],
  providers: [QualsCommitteeService, QualsCommitteeResolver],
  exports: [QualsCommitteeService],
})
export class QualsCommitteeModule {}
