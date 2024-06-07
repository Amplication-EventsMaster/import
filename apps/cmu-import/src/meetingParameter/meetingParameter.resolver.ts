import * as graphql from "@nestjs/graphql";
import { MeetingParameterResolverBase } from "./base/meetingParameter.resolver.base";
import { MeetingParameter } from "./base/MeetingParameter";
import { MeetingParameterService } from "./meetingParameter.service";

@graphql.Resolver(() => MeetingParameter)
export class MeetingParameterResolver extends MeetingParameterResolverBase {
  constructor(protected readonly service: MeetingParameterService) {
    super(service);
  }
}
