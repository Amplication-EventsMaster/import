import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FellowshipTitleService } from "./fellowshipTitle.service";
import { FellowshipTitleControllerBase } from "./base/fellowshipTitle.controller.base";

@swagger.ApiTags("fellowshipTitles")
@common.Controller("fellowshipTitles")
export class FellowshipTitleController extends FellowshipTitleControllerBase {
  constructor(protected readonly service: FellowshipTitleService) {
    super(service);
  }
}
