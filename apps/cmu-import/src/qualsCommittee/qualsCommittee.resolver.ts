import * as graphql from "@nestjs/graphql";
import { QualsCommitteeResolverBase } from "./base/qualsCommittee.resolver.base";
import { QualsCommittee } from "./base/QualsCommittee";
import { QualsCommitteeService } from "./qualsCommittee.service";

@graphql.Resolver(() => QualsCommittee)
export class QualsCommitteeResolver extends QualsCommitteeResolverBase {
  constructor(protected readonly service: QualsCommitteeService) {
    super(service);
  }
}
