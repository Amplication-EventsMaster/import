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
import { FacultyCert } from "./FacultyCert";
import { FacultyCertCountArgs } from "./FacultyCertCountArgs";
import { FacultyCertFindManyArgs } from "./FacultyCertFindManyArgs";
import { FacultyCertFindUniqueArgs } from "./FacultyCertFindUniqueArgs";
import { CreateFacultyCertArgs } from "./CreateFacultyCertArgs";
import { UpdateFacultyCertArgs } from "./UpdateFacultyCertArgs";
import { DeleteFacultyCertArgs } from "./DeleteFacultyCertArgs";
import { FacultyCertService } from "../facultyCert.service";
@graphql.Resolver(() => FacultyCert)
export class FacultyCertResolverBase {
  constructor(protected readonly service: FacultyCertService) {}

  async _facultyCertsMeta(
    @graphql.Args() args: FacultyCertCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [FacultyCert])
  async facultyCerts(
    @graphql.Args() args: FacultyCertFindManyArgs
  ): Promise<FacultyCert[]> {
    return this.service.facultyCerts(args);
  }

  @graphql.Query(() => FacultyCert, { nullable: true })
  async facultyCert(
    @graphql.Args() args: FacultyCertFindUniqueArgs
  ): Promise<FacultyCert | null> {
    const result = await this.service.facultyCert(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => FacultyCert)
  async createFacultyCert(
    @graphql.Args() args: CreateFacultyCertArgs
  ): Promise<FacultyCert> {
    return await this.service.createFacultyCert({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => FacultyCert)
  async updateFacultyCert(
    @graphql.Args() args: UpdateFacultyCertArgs
  ): Promise<FacultyCert | null> {
    try {
      return await this.service.updateFacultyCert({
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

  @graphql.Mutation(() => FacultyCert)
  async deleteFacultyCert(
    @graphql.Args() args: DeleteFacultyCertArgs
  ): Promise<FacultyCert | null> {
    try {
      return await this.service.deleteFacultyCert(args);
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
