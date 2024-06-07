import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StudentPubService } from "./studentPub.service";
import { StudentPubControllerBase } from "./base/studentPub.controller.base";

@swagger.ApiTags("studentPubs")
@common.Controller("studentPubs")
export class StudentPubController extends StudentPubControllerBase {
  constructor(protected readonly service: StudentPubService) {
    super(service);
  }
}
