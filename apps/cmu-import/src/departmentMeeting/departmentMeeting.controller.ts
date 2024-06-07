import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DepartmentMeetingService } from "./departmentMeeting.service";
import { DepartmentMeetingControllerBase } from "./base/departmentMeeting.controller.base";

@swagger.ApiTags("departmentMeetings")
@common.Controller("departmentMeetings")
export class DepartmentMeetingController extends DepartmentMeetingControllerBase {
  constructor(protected readonly service: DepartmentMeetingService) {
    super(service);
  }
}
