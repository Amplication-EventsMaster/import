import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MeetingAgendumService } from "./meetingAgendum.service";
import { MeetingAgendumControllerBase } from "./base/meetingAgendum.controller.base";

@swagger.ApiTags("meetingAgenda")
@common.Controller("meetingAgenda")
export class MeetingAgendumController extends MeetingAgendumControllerBase {
  constructor(protected readonly service: MeetingAgendumService) {
    super(service);
  }
}
