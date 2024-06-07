import * as graphql from "@nestjs/graphql";
import { ScheduledMeetingResolverBase } from "./base/scheduledMeeting.resolver.base";
import { ScheduledMeeting } from "./base/ScheduledMeeting";
import { ScheduledMeetingService } from "./scheduledMeeting.service";

@graphql.Resolver(() => ScheduledMeeting)
export class ScheduledMeetingResolver extends ScheduledMeetingResolverBase {
  constructor(protected readonly service: ScheduledMeetingService) {
    super(service);
  }
}
