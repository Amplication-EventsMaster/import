import * as graphql from "@nestjs/graphql";
import { MeetingAgendumResolverBase } from "./base/meetingAgendum.resolver.base";
import { MeetingAgendum } from "./base/MeetingAgendum";
import { MeetingAgendumService } from "./meetingAgendum.service";

@graphql.Resolver(() => MeetingAgendum)
export class MeetingAgendumResolver extends MeetingAgendumResolverBase {
  constructor(protected readonly service: MeetingAgendumService) {
    super(service);
  }
}
