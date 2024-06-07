import * as graphql from "@nestjs/graphql";
import { ReportColumnResolverBase } from "./base/reportColumn.resolver.base";
import { ReportColumn } from "./base/ReportColumn";
import { ReportColumnService } from "./reportColumn.service";

@graphql.Resolver(() => ReportColumn)
export class ReportColumnResolver extends ReportColumnResolverBase {
  constructor(protected readonly service: ReportColumnService) {
    super(service);
  }
}
