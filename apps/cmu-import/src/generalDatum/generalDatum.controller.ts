import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GeneralDatumService } from "./generalDatum.service";
import { GeneralDatumControllerBase } from "./base/generalDatum.controller.base";

@swagger.ApiTags("generalData")
@common.Controller("generalData")
export class GeneralDatumController extends GeneralDatumControllerBase {
  constructor(protected readonly service: GeneralDatumService) {
    super(service);
  }
}
