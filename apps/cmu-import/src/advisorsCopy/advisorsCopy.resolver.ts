import * as graphql from "@nestjs/graphql";
import { AdvisorsCopyResolverBase } from "./base/advisorsCopy.resolver.base";
import { AdvisorsCopy } from "./base/AdvisorsCopy";
import { AdvisorsCopyService } from "./advisorsCopy.service";

@graphql.Resolver(() => AdvisorsCopy)
export class AdvisorsCopyResolver extends AdvisorsCopyResolverBase {
  constructor(protected readonly service: AdvisorsCopyService) {
    super(service);
  }
}
