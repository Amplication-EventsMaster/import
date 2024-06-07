import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MeetingService } from "./meeting.service";
import { MeetingControllerBase } from "./base/meeting.controller.base";

@swagger.ApiTags("meetings")
@common.Controller("meetings")
export class MeetingController extends MeetingControllerBase {
  constructor(protected readonly service: MeetingService) {
    super(service);
  }
}
