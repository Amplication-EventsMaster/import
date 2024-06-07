import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AreaService } from "./area.service";
import { AreaControllerBase } from "./base/area.controller.base";

@swagger.ApiTags("areas")
@common.Controller("areas")
export class AreaController extends AreaControllerBase {
  constructor(protected readonly service: AreaService) {
    super(service);
  }
}
