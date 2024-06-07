import * as graphql from "@nestjs/graphql";
import { LeadershipResolverBase } from "./base/leadership.resolver.base";
import { Leadership } from "./base/Leadership";
import { LeadershipService } from "./leadership.service";

@graphql.Resolver(() => Leadership)
export class LeadershipResolver extends LeadershipResolverBase {
  constructor(protected readonly service: LeadershipService) {
    super(service);
  }
}
