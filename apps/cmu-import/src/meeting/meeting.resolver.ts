import * as graphql from "@nestjs/graphql";
import { MeetingResolverBase } from "./base/meeting.resolver.base";
import { Meeting } from "./base/Meeting";
import { MeetingService } from "./meeting.service";

@graphql.Resolver(() => Meeting)
export class MeetingResolver extends MeetingResolverBase {
  constructor(protected readonly service: MeetingService) {
    super(service);
  }
}
