import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LegacyRequirementService } from "./legacyRequirement.service";
import { LegacyRequirementControllerBase } from "./base/legacyRequirement.controller.base";

@swagger.ApiTags("legacyRequirements")
@common.Controller("legacyRequirements")
export class LegacyRequirementController extends LegacyRequirementControllerBase {
  constructor(protected readonly service: LegacyRequirementService) {
    super(service);
  }
}
