import * as graphql from "@nestjs/graphql";
import { UserHostResolverBase } from "./base/userHost.resolver.base";
import { UserHost } from "./base/UserHost";
import { UserHostService } from "./userHost.service";

@graphql.Resolver(() => UserHost)
export class UserHostResolver extends UserHostResolverBase {
  constructor(protected readonly service: UserHostService) {
    super(service);
  }
}
