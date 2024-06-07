import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PresentationService } from "./presentation.service";
import { PresentationControllerBase } from "./base/presentation.controller.base";

@swagger.ApiTags("presentations")
@common.Controller("presentations")
export class PresentationController extends PresentationControllerBase {
  constructor(protected readonly service: PresentationService) {
    super(service);
  }
}
