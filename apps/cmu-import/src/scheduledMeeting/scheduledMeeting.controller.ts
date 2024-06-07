import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ScheduledMeetingService } from "./scheduledMeeting.service";
import { ScheduledMeetingControllerBase } from "./base/scheduledMeeting.controller.base";

@swagger.ApiTags("scheduledMeetings")
@common.Controller("scheduledMeetings")
export class ScheduledMeetingController extends ScheduledMeetingControllerBase {
  constructor(protected readonly service: ScheduledMeetingService) {
    super(service);
  }
}
