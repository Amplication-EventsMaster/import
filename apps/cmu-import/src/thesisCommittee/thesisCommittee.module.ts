import { Module } from "@nestjs/common";
import { ThesisCommitteeModuleBase } from "./base/thesisCommittee.module.base";
import { ThesisCommitteeService } from "./thesisCommittee.service";
import { ThesisCommitteeController } from "./thesisCommittee.controller";
import { ThesisCommitteeResolver } from "./thesisCommittee.resolver";

@Module({
  imports: [ThesisCommitteeModuleBase],
  controllers: [ThesisCommitteeController],
  providers: [ThesisCommitteeService, ThesisCommitteeResolver],
  exports: [ThesisCommitteeService],
})
export class ThesisCommitteeModule {}
