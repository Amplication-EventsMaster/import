import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AgendaService } from "./agenda.service";
import { AgendaControllerBase } from "./base/agenda.controller.base";

@swagger.ApiTags("agenda")
@common.Controller("agenda")
export class AgendaController extends AgendaControllerBase {
  constructor(protected readonly service: AgendaService) {
    super(service);
  }
}
