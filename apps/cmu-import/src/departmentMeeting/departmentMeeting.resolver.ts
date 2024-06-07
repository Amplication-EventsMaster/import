import * as graphql from "@nestjs/graphql";
import { DepartmentMeetingResolverBase } from "./base/departmentMeeting.resolver.base";
import { DepartmentMeeting } from "./base/DepartmentMeeting";
import { DepartmentMeetingService } from "./departmentMeeting.service";

@graphql.Resolver(() => DepartmentMeeting)
export class DepartmentMeetingResolver extends DepartmentMeetingResolverBase {
  constructor(protected readonly service: DepartmentMeetingService) {
    super(service);
  }
}
