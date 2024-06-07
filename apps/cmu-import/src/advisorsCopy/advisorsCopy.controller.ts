import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AdvisorsCopyService } from "./advisorsCopy.service";
import { AdvisorsCopyControllerBase } from "./base/advisorsCopy.controller.base";

@swagger.ApiTags("advisorsCopies")
@common.Controller("advisorsCopies")
export class AdvisorsCopyController extends AdvisorsCopyControllerBase {
  constructor(protected readonly service: AdvisorsCopyService) {
    super(service);
  }
}
