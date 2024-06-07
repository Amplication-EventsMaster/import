import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ItaService } from "./ita.service";
import { ItaControllerBase } from "./base/ita.controller.base";

@swagger.ApiTags("itas")
@common.Controller("itas")
export class ItaController extends ItaControllerBase {
  constructor(protected readonly service: ItaService) {
    super(service);
  }
}
