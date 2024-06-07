import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MeetingParameterService } from "./meetingParameter.service";
import { MeetingParameterControllerBase } from "./base/meetingParameter.controller.base";

@swagger.ApiTags("meetingParameters")
@common.Controller("meetingParameters")
export class MeetingParameterController extends MeetingParameterControllerBase {
  constructor(protected readonly service: MeetingParameterService) {
    super(service);
  }
}
