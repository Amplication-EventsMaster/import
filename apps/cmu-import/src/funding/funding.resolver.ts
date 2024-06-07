import * as graphql from "@nestjs/graphql";
import { FundingResolverBase } from "./base/funding.resolver.base";
import { Funding } from "./base/Funding";
import { FundingService } from "./funding.service";

@graphql.Resolver(() => Funding)
export class FundingResolver extends FundingResolverBase {
  constructor(protected readonly service: FundingService) {
    super(service);
  }
}
