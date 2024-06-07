/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { UserRoleProgram } from "./UserRoleProgram";
import { UserRoleProgramCountArgs } from "./UserRoleProgramCountArgs";
import { UserRoleProgramFindManyArgs } from "./UserRoleProgramFindManyArgs";
import { UserRoleProgramFindUniqueArgs } from "./UserRoleProgramFindUniqueArgs";
import { CreateUserRoleProgramArgs } from "./CreateUserRoleProgramArgs";
import { UpdateUserRoleProgramArgs } from "./UpdateUserRoleProgramArgs";
import { DeleteUserRoleProgramArgs } from "./DeleteUserRoleProgramArgs";
import { UserRoleProgramService } from "../userRoleProgram.service";
@graphql.Resolver(() => UserRoleProgram)
export class UserRoleProgramResolverBase {
  constructor(protected readonly service: UserRoleProgramService) {}

  async _userRoleProgramsMeta(
    @graphql.Args() args: UserRoleProgramCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [UserRoleProgram])
  async userRolePrograms(
    @graphql.Args() args: UserRoleProgramFindManyArgs
  ): Promise<UserRoleProgram[]> {
    return this.service.userRolePrograms(args);
  }

  @graphql.Query(() => UserRoleProgram, { nullable: true })
  async userRoleProgram(
    @graphql.Args() args: UserRoleProgramFindUniqueArgs
  ): Promise<UserRoleProgram | null> {
    const result = await this.service.userRoleProgram(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => UserRoleProgram)
  async createUserRoleProgram(
    @graphql.Args() args: CreateUserRoleProgramArgs
  ): Promise<UserRoleProgram> {
    return await this.service.createUserRoleProgram({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => UserRoleProgram)
  async updateUserRoleProgram(
    @graphql.Args() args: UpdateUserRoleProgramArgs
  ): Promise<UserRoleProgram | null> {
    try {
      return await this.service.updateUserRoleProgram({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => UserRoleProgram)
  async deleteUserRoleProgram(
    @graphql.Args() args: DeleteUserRoleProgramArgs
  ): Promise<UserRoleProgram | null> {
    try {
      return await this.service.deleteUserRoleProgram(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
