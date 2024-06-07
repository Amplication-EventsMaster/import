import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ResponsibleConductOfResearchService } from "./responsibleConductOfResearch.service";
import { ResponsibleConductOfResearchControllerBase } from "./base/responsibleConductOfResearch.controller.base";

@swagger.ApiTags("responsibleConductOfResearches")
@common.Controller("responsibleConductOfResearches")
export class ResponsibleConductOfResearchController extends ResponsibleConductOfResearchControllerBase {
  constructor(protected readonly service: ResponsibleConductOfResearchService) {
    super(service);
  }
}
