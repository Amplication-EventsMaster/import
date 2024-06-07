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
import { ProgramStatus } from "./ProgramStatus";
import { ProgramStatusCountArgs } from "./ProgramStatusCountArgs";
import { ProgramStatusFindManyArgs } from "./ProgramStatusFindManyArgs";
import { ProgramStatusFindUniqueArgs } from "./ProgramStatusFindUniqueArgs";
import { CreateProgramStatusArgs } from "./CreateProgramStatusArgs";
import { UpdateProgramStatusArgs } from "./UpdateProgramStatusArgs";
import { DeleteProgramStatusArgs } from "./DeleteProgramStatusArgs";
import { StudentDatum } from "../../studentDatum/base/StudentDatum";
import { ProgramStatusService } from "../programStatus.service";
@graphql.Resolver(() => ProgramStatus)
export class ProgramStatusResolverBase {
  constructor(protected readonly service: ProgramStatusService) {}

  async _programStatusesMeta(
    @graphql.Args() args: ProgramStatusCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ProgramStatus])
  async programStatuses(
    @graphql.Args() args: ProgramStatusFindManyArgs
  ): Promise<ProgramStatus[]> {
    return this.service.programStatuses(args);
  }

  @graphql.Query(() => ProgramStatus, { nullable: true })
  async programStatus(
    @graphql.Args() args: ProgramStatusFindUniqueArgs
  ): Promise<ProgramStatus | null> {
    const result = await this.service.programStatus(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ProgramStatus)
  async createProgramStatus(
    @graphql.Args() args: CreateProgramStatusArgs
  ): Promise<ProgramStatus> {
    return await this.service.createProgramStatus({
      ...args,
      data: {
        ...args.data,

        studentData: {
          connect: args.data.studentData,
        },
      },
    });
  }

  @graphql.Mutation(() => ProgramStatus)
  async updateProgramStatus(
    @graphql.Args() args: UpdateProgramStatusArgs
  ): Promise<ProgramStatus | null> {
    try {
      return await this.service.updateProgramStatus({
        ...args,
        data: {
          ...args.data,

          studentData: {
            connect: args.data.studentData,
          },
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

  @graphql.Mutation(() => ProgramStatus)
  async deleteProgramStatus(
    @graphql.Args() args: DeleteProgramStatusArgs
  ): Promise<ProgramStatus | null> {
    try {
      return await this.service.deleteProgramStatus(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => StudentDatum, {
    nullable: true,
    name: "studentData",
  })
  async getStudentData(
    @graphql.Parent() parent: ProgramStatus
  ): Promise<StudentDatum | null> {
    const result = await this.service.getStudentData(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
