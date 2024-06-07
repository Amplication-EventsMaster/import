import { Module } from "@nestjs/common";
import { MeetingModuleBase } from "./base/meeting.module.base";
import { MeetingService } from "./meeting.service";
import { MeetingController } from "./meeting.controller";
import { MeetingResolver } from "./meeting.resolver";

@Module({
  imports: [MeetingModuleBase],
  controllers: [MeetingController],
  providers: [MeetingService, MeetingResolver],
  exports: [MeetingService],
})
export class MeetingModule {}
