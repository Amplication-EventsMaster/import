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
import { UserRole } from "./UserRole";
import { UserRoleCountArgs } from "./UserRoleCountArgs";
import { UserRoleFindManyArgs } from "./UserRoleFindManyArgs";
import { UserRoleFindUniqueArgs } from "./UserRoleFindUniqueArgs";
import { CreateUserRoleArgs } from "./CreateUserRoleArgs";
import { UpdateUserRoleArgs } from "./UpdateUserRoleArgs";
import { DeleteUserRoleArgs } from "./DeleteUserRoleArgs";
import { StudentDatumFindManyArgs } from "../../studentDatum/base/StudentDatumFindManyArgs";
import { StudentDatum } from "../../studentDatum/base/StudentDatum";
import { User } from "../../user/base/User";
import { UserRoleService } from "../userRole.service";
@graphql.Resolver(() => UserRole)
export class UserRoleResolverBase {
  constructor(protected readonly service: UserRoleService) {}

  async _userRolesMeta(
    @graphql.Args() args: UserRoleCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [UserRole])
  async userRoles(
    @graphql.Args() args: UserRoleFindManyArgs
  ): Promise<UserRole[]> {
    return this.service.userRoles(args);
  }

  @graphql.Query(() => UserRole, { nullable: true })
  async userRole(
    @graphql.Args() args: UserRoleFindUniqueArgs
  ): Promise<UserRole | null> {
    const result = await this.service.userRole(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => UserRole)
  async createUserRole(
    @graphql.Args() args: CreateUserRoleArgs
  ): Promise<UserRole> {
    return await this.service.createUserRole({
      ...args,
      data: {
        ...args.data,

        users: args.data.users
          ? {
              connect: args.data.users,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => UserRole)
  async updateUserRole(
    @graphql.Args() args: UpdateUserRoleArgs
  ): Promise<UserRole | null> {
    try {
      return await this.service.updateUserRole({
        ...args,
        data: {
          ...args.data,

          users: args.data.users
            ? {
                connect: args.data.users,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => UserRole)
  async deleteUserRole(
    @graphql.Args() args: DeleteUserRoleArgs
  ): Promise<UserRole | null> {
    try {
      return await this.service.deleteUserRole(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [StudentDatum], { name: "studentData" })
  async findStudentData(
    @graphql.Parent() parent: UserRole,
    @graphql.Args() args: StudentDatumFindManyArgs
  ): Promise<StudentDatum[]> {
    const results = await this.service.findStudentData(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "users",
  })
  async getUsers(@graphql.Parent() parent: UserRole): Promise<User | null> {
    const result = await this.service.getUsers(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
