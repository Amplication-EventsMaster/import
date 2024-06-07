import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InternshipsIsrmService } from "./internshipsIsrm.service";
import { InternshipsIsrmControllerBase } from "./base/internshipsIsrm.controller.base";

@swagger.ApiTags("internshipsIsrms")
@common.Controller("internshipsIsrms")
export class InternshipsIsrmController extends InternshipsIsrmControllerBase {
  constructor(protected readonly service: InternshipsIsrmService) {
    super(service);
  }
}
