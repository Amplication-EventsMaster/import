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
import { DegreeStatus } from "./DegreeStatus";
import { DegreeStatusCountArgs } from "./DegreeStatusCountArgs";
import { DegreeStatusFindManyArgs } from "./DegreeStatusFindManyArgs";
import { DegreeStatusFindUniqueArgs } from "./DegreeStatusFindUniqueArgs";
import { CreateDegreeStatusArgs } from "./CreateDegreeStatusArgs";
import { UpdateDegreeStatusArgs } from "./UpdateDegreeStatusArgs";
import { DeleteDegreeStatusArgs } from "./DeleteDegreeStatusArgs";
import { StudentDatum } from "../../studentDatum/base/StudentDatum";
import { DegreeStatusService } from "../degreeStatus.service";
@graphql.Resolver(() => DegreeStatus)
export class DegreeStatusResolverBase {
  constructor(protected readonly service: DegreeStatusService) {}

  async _degreeStatusesMeta(
    @graphql.Args() args: DegreeStatusCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [DegreeStatus])
  async degreeStatuses(
    @graphql.Args() args: DegreeStatusFindManyArgs
  ): Promise<DegreeStatus[]> {
    return this.service.degreeStatuses(args);
  }

  @graphql.Query(() => DegreeStatus, { nullable: true })
  async degreeStatus(
    @graphql.Args() args: DegreeStatusFindUniqueArgs
  ): Promise<DegreeStatus | null> {
    const result = await this.service.degreeStatus(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => DegreeStatus)
  async createDegreeStatus(
    @graphql.Args() args: CreateDegreeStatusArgs
  ): Promise<DegreeStatus> {
    return await this.service.createDegreeStatus({
      ...args,
      data: {
        ...args.data,

        studentData: {
          connect: args.data.studentData,
        },
      },
    });
  }

  @graphql.Mutation(() => DegreeStatus)
  async updateDegreeStatus(
    @graphql.Args() args: UpdateDegreeStatusArgs
  ): Promise<DegreeStatus | null> {
    try {
      return await this.service.updateDegreeStatus({
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

  @graphql.Mutation(() => DegreeStatus)
  async deleteDegreeStatus(
    @graphql.Args() args: DeleteDegreeStatusArgs
  ): Promise<DegreeStatus | null> {
    try {
      return await this.service.deleteDegreeStatus(args);
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
    @graphql.Parent() parent: DegreeStatus
  ): Promise<StudentDatum | null> {
    const result = await this.service.getStudentData(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
