import { Module } from "@nestjs/common";
import { MeetingParameterModuleBase } from "./base/meetingParameter.module.base";
import { MeetingParameterService } from "./meetingParameter.service";
import { MeetingParameterController } from "./meetingParameter.controller";
import { MeetingParameterResolver } from "./meetingParameter.resolver";

@Module({
  imports: [MeetingParameterModuleBase],
  controllers: [MeetingParameterController],
  providers: [MeetingParameterService, MeetingParameterResolver],
  exports: [MeetingParameterService],
})
export class MeetingParameterModule {}
