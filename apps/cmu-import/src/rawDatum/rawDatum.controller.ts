import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RawDatumService } from "./rawDatum.service";
import { RawDatumControllerBase } from "./base/rawDatum.controller.base";

@swagger.ApiTags("rawData")
@common.Controller("rawData")
export class RawDatumController extends RawDatumControllerBase {
  constructor(protected readonly service: RawDatumService) {
    super(service);
  }
}
