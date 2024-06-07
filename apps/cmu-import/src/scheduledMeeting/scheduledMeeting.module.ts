import { Module } from "@nestjs/common";
import { ScheduledMeetingModuleBase } from "./base/scheduledMeeting.module.base";
import { ScheduledMeetingService } from "./scheduledMeeting.service";
import { ScheduledMeetingController } from "./scheduledMeeting.controller";
import { ScheduledMeetingResolver } from "./scheduledMeeting.resolver";

@Module({
  imports: [ScheduledMeetingModuleBase],
  controllers: [ScheduledMeetingController],
  providers: [ScheduledMeetingService, ScheduledMeetingResolver],
  exports: [ScheduledMeetingService],
})
export class ScheduledMeetingModule {}
