import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QualsResearchService } from "./qualsResearch.service";
import { QualsResearchControllerBase } from "./base/qualsResearch.controller.base";

@swagger.ApiTags("qualsResearches")
@common.Controller("qualsResearches")
export class QualsResearchController extends QualsResearchControllerBase {
  constructor(protected readonly service: QualsResearchService) {
    super(service);
  }
}
