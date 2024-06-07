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
import { DepartmentSignature } from "./DepartmentSignature";
import { DepartmentSignatureCountArgs } from "./DepartmentSignatureCountArgs";
import { DepartmentSignatureFindManyArgs } from "./DepartmentSignatureFindManyArgs";
import { DepartmentSignatureFindUniqueArgs } from "./DepartmentSignatureFindUniqueArgs";
import { CreateDepartmentSignatureArgs } from "./CreateDepartmentSignatureArgs";
import { UpdateDepartmentSignatureArgs } from "./UpdateDepartmentSignatureArgs";
import { DeleteDepartmentSignatureArgs } from "./DeleteDepartmentSignatureArgs";
import { DepartmentSignatureService } from "../departmentSignature.service";
@graphql.Resolver(() => DepartmentSignature)
export class DepartmentSignatureResolverBase {
  constructor(protected readonly service: DepartmentSignatureService) {}

  async _departmentSignaturesMeta(
    @graphql.Args() args: DepartmentSignatureCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [DepartmentSignature])
  async departmentSignatures(
    @graphql.Args() args: DepartmentSignatureFindManyArgs
  ): Promise<DepartmentSignature[]> {
    return this.service.departmentSignatures(args);
  }

  @graphql.Query(() => DepartmentSignature, { nullable: true })
  async departmentSignature(
    @graphql.Args() args: DepartmentSignatureFindUniqueArgs
  ): Promise<DepartmentSignature | null> {
    const result = await this.service.departmentSignature(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => DepartmentSignature)
  async createDepartmentSignature(
    @graphql.Args() args: CreateDepartmentSignatureArgs
  ): Promise<DepartmentSignature> {
    return await this.service.createDepartmentSignature({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => DepartmentSignature)
  async updateDepartmentSignature(
    @graphql.Args() args: UpdateDepartmentSignatureArgs
  ): Promise<DepartmentSignature | null> {
    try {
      return await this.service.updateDepartmentSignature({
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

  @graphql.Mutation(() => DepartmentSignature)
  async deleteDepartmentSignature(
    @graphql.Args() args: DeleteDepartmentSignatureArgs
  ): Promise<DepartmentSignature | null> {
    try {
      return await this.service.deleteDepartmentSignature(args);
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
