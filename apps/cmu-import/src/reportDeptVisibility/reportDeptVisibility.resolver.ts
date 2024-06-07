import * as graphql from "@nestjs/graphql";
import { ReportDeptVisibilityResolverBase } from "./base/reportDeptVisibility.resolver.base";
import { ReportDeptVisibility } from "./base/ReportDeptVisibility";
import { ReportDeptVisibilityService } from "./reportDeptVisibility.service";

@graphql.Resolver(() => ReportDeptVisibility)
export class ReportDeptVisibilityResolver extends ReportDeptVisibilityResolverBase {
  constructor(protected readonly service: ReportDeptVisibilityService) {
    super(service);
  }
}
