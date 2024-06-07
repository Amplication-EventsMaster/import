import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FacultyCertService } from "./facultyCert.service";
import { FacultyCertControllerBase } from "./base/facultyCert.controller.base";

@swagger.ApiTags("facultyCerts")
@common.Controller("facultyCerts")
export class FacultyCertController extends FacultyCertControllerBase {
  constructor(protected readonly service: FacultyCertService) {
    super(service);
  }
}
