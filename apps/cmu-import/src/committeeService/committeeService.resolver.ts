import * as graphql from "@nestjs/graphql";
import { CommitteeServiceResolverBase } from "./base/committeeService.resolver.base";
import { CommitteeService } from "./base/CommitteeService";
import { CommitteeServiceService } from "./committeeService.service";

@graphql.Resolver(() => CommitteeService)
export class CommitteeServiceResolver extends CommitteeServiceResolverBase {
  constructor(protected readonly service: CommitteeServiceService) {
    super(service);
  }
}
