import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EventScheduleService } from "./eventSchedule.service";
import { EventScheduleControllerBase } from "./base/eventSchedule.controller.base";

@swagger.ApiTags("eventSchedules")
@common.Controller("eventSchedules")
export class EventScheduleController extends EventScheduleControllerBase {
  constructor(protected readonly service: EventScheduleService) {
    super(service);
  }
}
