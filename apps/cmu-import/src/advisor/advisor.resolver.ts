import * as graphql from "@nestjs/graphql";
import { AdvisorResolverBase } from "./base/advisor.resolver.base";
import { Advisor } from "./base/Advisor";
import { AdvisorService } from "./advisor.service";

@graphql.Resolver(() => Advisor)
export class AdvisorResolver extends AdvisorResolverBase {
  constructor(protected readonly service: AdvisorService) {
    super(service);
  }
}
