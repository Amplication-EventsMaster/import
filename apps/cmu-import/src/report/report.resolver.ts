import * as graphql from "@nestjs/graphql";
import { ReportResolverBase } from "./base/report.resolver.base";
import { Report } from "./base/Report";
import { ReportService } from "./report.service";

@graphql.Resolver(() => Report)
export class ReportResolver extends ReportResolverBase {
  constructor(protected readonly service: ReportService) {
    super(service);
  }
}
