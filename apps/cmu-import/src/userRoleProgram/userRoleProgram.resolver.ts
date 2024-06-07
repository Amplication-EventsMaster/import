import * as graphql from "@nestjs/graphql";
import { UserRoleProgramResolverBase } from "./base/userRoleProgram.resolver.base";
import { UserRoleProgram } from "./base/UserRoleProgram";
import { UserRoleProgramService } from "./userRoleProgram.service";

@graphql.Resolver(() => UserRoleProgram)
export class UserRoleProgramResolver extends UserRoleProgramResolverBase {
  constructor(protected readonly service: UserRoleProgramService) {
    super(service);
  }
}
