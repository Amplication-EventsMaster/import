import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ThesisCommitteeService } from "./thesisCommittee.service";
import { ThesisCommitteeControllerBase } from "./base/thesisCommittee.controller.base";

@swagger.ApiTags("thesisCommittees")
@common.Controller("thesisCommittees")
export class ThesisCommitteeController extends ThesisCommitteeControllerBase {
  constructor(protected readonly service: ThesisCommitteeService) {
    super(service);
  }
}
