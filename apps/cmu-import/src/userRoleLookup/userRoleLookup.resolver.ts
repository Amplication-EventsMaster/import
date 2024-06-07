import * as graphql from "@nestjs/graphql";
import { UserRoleLookupResolverBase } from "./base/userRoleLookup.resolver.base";
import { UserRoleLookup } from "./base/UserRoleLookup";
import { UserRoleLookupService } from "./userRoleLookup.service";

@graphql.Resolver(() => UserRoleLookup)
export class UserRoleLookupResolver extends UserRoleLookupResolverBase {
  constructor(protected readonly service: UserRoleLookupService) {
    super(service);
  }
}
