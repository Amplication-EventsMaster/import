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
import { QualsSpeaking } from "./QualsSpeaking";
import { QualsSpeakingCountArgs } from "./QualsSpeakingCountArgs";
import { QualsSpeakingFindManyArgs } from "./QualsSpeakingFindManyArgs";
import { QualsSpeakingFindUniqueArgs } from "./QualsSpeakingFindUniqueArgs";
import { CreateQualsSpeakingArgs } from "./CreateQualsSpeakingArgs";
import { UpdateQualsSpeakingArgs } from "./UpdateQualsSpeakingArgs";
import { DeleteQualsSpeakingArgs } from "./DeleteQualsSpeakingArgs";
import { QualsSpeakingAspectFindManyArgs } from "../../qualsSpeakingAspect/base/QualsSpeakingAspectFindManyArgs";
import { QualsSpeakingAspect } from "../../qualsSpeakingAspect/base/QualsSpeakingAspect";
import { QualsSpeakingService } from "../qualsSpeaking.service";
@graphql.Resolver(() => QualsSpeaking)
export class QualsSpeakingResolverBase {
  constructor(protected readonly service: QualsSpeakingService) {}

  async _qualsSpeakingsMeta(
    @graphql.Args() args: QualsSpeakingCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [QualsSpeaking])
  async qualsSpeakings(
    @graphql.Args() args: QualsSpeakingFindManyArgs
  ): Promise<QualsSpeaking[]> {
    return this.service.qualsSpeakings(args);
  }

  @graphql.Query(() => QualsSpeaking, { nullable: true })
  async qualsSpeaking(
    @graphql.Args() args: QualsSpeakingFindUniqueArgs
  ): Promise<QualsSpeaking | null> {
    const result = await this.service.qualsSpeaking(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => QualsSpeaking)
  async createQualsSpeaking(
    @graphql.Args() args: CreateQualsSpeakingArgs
  ): Promise<QualsSpeaking> {
    return await this.service.createQualsSpeaking({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => QualsSpeaking)
  async updateQualsSpeaking(
    @graphql.Args() args: UpdateQualsSpeakingArgs
  ): Promise<QualsSpeaking | null> {
    try {
      return await this.service.updateQualsSpeaking({
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

  @graphql.Mutation(() => QualsSpeaking)
  async deleteQualsSpeaking(
    @graphql.Args() args: DeleteQualsSpeakingArgs
  ): Promise<QualsSpeaking | null> {
    try {
      return await this.service.deleteQualsSpeaking(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [QualsSpeakingAspect], {
    name: "qualsSpeakingAspect",
  })
  async findQualsSpeakingAspect(
    @graphql.Parent() parent: QualsSpeaking,
    @graphql.Args() args: QualsSpeakingAspectFindManyArgs
  ): Promise<QualsSpeakingAspect[]> {
    const results = await this.service.findQualsSpeakingAspect(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
