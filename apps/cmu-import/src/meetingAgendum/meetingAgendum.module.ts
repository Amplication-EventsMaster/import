import { Module } from "@nestjs/common";
import { MeetingAgendumModuleBase } from "./base/meetingAgendum.module.base";
import { MeetingAgendumService } from "./meetingAgendum.service";
import { MeetingAgendumController } from "./meetingAgendum.controller";
import { MeetingAgendumResolver } from "./meetingAgendum.resolver";

@Module({
  imports: [MeetingAgendumModuleBase],
  controllers: [MeetingAgendumController],
  providers: [MeetingAgendumService, MeetingAgendumResolver],
  exports: [MeetingAgendumService],
})
export class MeetingAgendumModule {}
