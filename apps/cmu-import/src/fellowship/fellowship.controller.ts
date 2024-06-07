import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FellowshipService } from "./fellowship.service";
import { FellowshipControllerBase } from "./base/fellowship.controller.base";

@swagger.ApiTags("fellowships")
@common.Controller("fellowships")
export class FellowshipController extends FellowshipControllerBase {
  constructor(protected readonly service: FellowshipService) {
    super(service);
  }
}
