import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StudentCommitteeMeetingService } from "./studentCommitteeMeeting.service";
import { StudentCommitteeMeetingControllerBase } from "./base/studentCommitteeMeeting.controller.base";

@swagger.ApiTags("studentCommitteeMeetings")
@common.Controller("studentCommitteeMeetings")
export class StudentCommitteeMeetingController extends StudentCommitteeMeetingControllerBase {
  constructor(protected readonly service: StudentCommitteeMeetingService) {
    super(service);
  }
}
