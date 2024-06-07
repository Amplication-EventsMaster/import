import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GreGeneralConvService } from "./greGeneralConv.service";
import { GreGeneralConvControllerBase } from "./base/greGeneralConv.controller.base";

@swagger.ApiTags("greGeneralConvs")
@common.Controller("greGeneralConvs")
export class GreGeneralConvController extends GreGeneralConvControllerBase {
  constructor(protected readonly service: GreGeneralConvService) {
    super(service);
  }
}
