import * as graphql from "@nestjs/graphql";
import { EventScheduleResolverBase } from "./base/eventSchedule.resolver.base";
import { EventSchedule } from "./base/EventSchedule";
import { EventScheduleService } from "./eventSchedule.service";

@graphql.Resolver(() => EventSchedule)
export class EventScheduleResolver extends EventScheduleResolverBase {
  constructor(protected readonly service: EventScheduleService) {
    super(service);
  }
}
