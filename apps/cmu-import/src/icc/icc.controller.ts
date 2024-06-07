import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { IccService } from "./icc.service";
import { IccControllerBase } from "./base/icc.controller.base";

@swagger.ApiTags("iccs")
@common.Controller("iccs")
export class IccController extends IccControllerBase {
  constructor(protected readonly service: IccService) {
    super(service);
  }
}
