import * as graphql from "@nestjs/graphql";
import { ThesisCommitteeResolverBase } from "./base/thesisCommittee.resolver.base";
import { ThesisCommittee } from "./base/ThesisCommittee";
import { ThesisCommitteeService } from "./thesisCommittee.service";

@graphql.Resolver(() => ThesisCommittee)
export class ThesisCommitteeResolver extends ThesisCommitteeResolverBase {
  constructor(protected readonly service: ThesisCommitteeService) {
    super(service);
  }
}
