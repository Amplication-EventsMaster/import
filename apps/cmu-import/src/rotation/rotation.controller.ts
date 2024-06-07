import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RotationService } from "./rotation.service";
import { RotationControllerBase } from "./base/rotation.controller.base";

@swagger.ApiTags("rotations")
@common.Controller("rotations")
export class RotationController extends RotationControllerBase {
  constructor(protected readonly service: RotationService) {
    super(service);
  }
}
