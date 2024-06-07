import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InternshipsIniService } from "./internshipsIni.service";
import { InternshipsIniControllerBase } from "./base/internshipsIni.controller.base";

@swagger.ApiTags("internshipsInis")
@common.Controller("internshipsInis")
export class InternshipsIniController extends InternshipsIniControllerBase {
  constructor(protected readonly service: InternshipsIniService) {
    super(service);
  }
}
