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
import { MeetingParameter } from "./MeetingParameter";
import { MeetingParameterCountArgs } from "./MeetingParameterCountArgs";
import { MeetingParameterFindManyArgs } from "./MeetingParameterFindManyArgs";
import { MeetingParameterFindUniqueArgs } from "./MeetingParameterFindUniqueArgs";
import { CreateMeetingParameterArgs } from "./CreateMeetingParameterArgs";
import { UpdateMeetingParameterArgs } from "./UpdateMeetingParameterArgs";
import { DeleteMeetingParameterArgs } from "./DeleteMeetingParameterArgs";
import { MeetingParameterService } from "../meetingParameter.service";
@graphql.Resolver(() => MeetingParameter)
export class MeetingParameterResolverBase {
  constructor(protected readonly service: MeetingParameterService) {}

  async _meetingParametersMeta(
    @graphql.Args() args: MeetingParameterCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [MeetingParameter])
  async meetingParameters(
    @graphql.Args() args: MeetingParameterFindManyArgs
  ): Promise<MeetingParameter[]> {
    return this.service.meetingParameters(args);
  }

  @graphql.Query(() => MeetingParameter, { nullable: true })
  async meetingParameter(
    @graphql.Args() args: MeetingParameterFindUniqueArgs
  ): Promise<MeetingParameter | null> {
    const result = await this.service.meetingParameter(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => MeetingParameter)
  async createMeetingParameter(
    @graphql.Args() args: CreateMeetingParameterArgs
  ): Promise<MeetingParameter> {
    return await this.service.createMeetingParameter({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => MeetingParameter)
  async updateMeetingParameter(
    @graphql.Args() args: UpdateMeetingParameterArgs
  ): Promise<MeetingParameter | null> {
    try {
      return await this.service.updateMeetingParameter({
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

  @graphql.Mutation(() => MeetingParameter)
  async deleteMeetingParameter(
    @graphql.Args() args: DeleteMeetingParameterArgs
  ): Promise<MeetingParameter | null> {
    try {
      return await this.service.deleteMeetingParameter(args);
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
