import { Module } from "@nestjs/common";
import { StudentCommitteeMeetingModuleBase } from "./base/studentCommitteeMeeting.module.base";
import { StudentCommitteeMeetingService } from "./studentCommitteeMeeting.service";
import { StudentCommitteeMeetingController } from "./studentCommitteeMeeting.controller";
import { StudentCommitteeMeetingResolver } from "./studentCommitteeMeeting.resolver";

@Module({
  imports: [StudentCommitteeMeetingModuleBase],
  controllers: [StudentCommitteeMeetingController],
  providers: [StudentCommitteeMeetingService, StudentCommitteeMeetingResolver],
  exports: [StudentCommitteeMeetingService],
})
export class StudentCommitteeMeetingModule {}
