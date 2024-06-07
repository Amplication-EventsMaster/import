import * as graphql from "@nestjs/graphql";
import { UserAccessResolverBase } from "./base/userAccess.resolver.base";
import { UserAccess } from "./base/UserAccess";
import { UserAccessService } from "./userAccess.service";

@graphql.Resolver(() => UserAccess)
export class UserAccessResolver extends UserAccessResolverBase {
  constructor(protected readonly service: UserAccessService) {
    super(service);
  }
}
