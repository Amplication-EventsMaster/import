import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AgendaItemService } from "./agendaItem.service";
import { AgendaItemControllerBase } from "./base/agendaItem.controller.base";

@swagger.ApiTags("agendaItems")
@common.Controller("agendaItems")
export class AgendaItemController extends AgendaItemControllerBase {
  constructor(protected readonly service: AgendaItemService) {
    super(service);
  }
}
