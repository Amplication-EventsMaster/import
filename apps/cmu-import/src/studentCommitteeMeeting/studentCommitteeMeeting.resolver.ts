import * as graphql from "@nestjs/graphql";
import { StudentCommitteeMeetingResolverBase } from "./base/studentCommitteeMeeting.resolver.base";
import { StudentCommitteeMeeting } from "./base/StudentCommitteeMeeting";
import { StudentCommitteeMeetingService } from "./studentCommitteeMeeting.service";

@graphql.Resolver(() => StudentCommitteeMeeting)
export class StudentCommitteeMeetingResolver extends StudentCommitteeMeetingResolverBase {
  constructor(protected readonly service: StudentCommitteeMeetingService) {
    super(service);
  }
}
