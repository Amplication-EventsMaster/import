import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QualsCommitteeService } from "./qualsCommittee.service";
import { QualsCommitteeControllerBase } from "./base/qualsCommittee.controller.base";

@swagger.ApiTags("qualsCommittees")
@common.Controller("qualsCommittees")
export class QualsCommitteeController extends QualsCommitteeControllerBase {
  constructor(protected readonly service: QualsCommitteeService) {
    super(service);
  }
}
