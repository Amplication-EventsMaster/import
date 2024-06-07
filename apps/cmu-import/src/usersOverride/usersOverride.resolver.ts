import * as graphql from "@nestjs/graphql";
import { UsersOverrideResolverBase } from "./base/usersOverride.resolver.base";
import { UsersOverride } from "./base/UsersOverride";
import { UsersOverrideService } from "./usersOverride.service";

@graphql.Resolver(() => UsersOverride)
export class UsersOverrideResolver extends UsersOverrideResolverBase {
  constructor(protected readonly service: UsersOverrideService) {
    super(service);
  }
}
