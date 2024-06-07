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
import { Employment } from "./Employment";
import { EmploymentCountArgs } from "./EmploymentCountArgs";
import { EmploymentFindManyArgs } from "./EmploymentFindManyArgs";
import { EmploymentFindUniqueArgs } from "./EmploymentFindUniqueArgs";
import { CreateEmploymentArgs } from "./CreateEmploymentArgs";
import { UpdateEmploymentArgs } from "./UpdateEmploymentArgs";
import { DeleteEmploymentArgs } from "./DeleteEmploymentArgs";
import { StudentDatum } from "../../studentDatum/base/StudentDatum";
import { EmploymentService } from "../employment.service";
@graphql.Resolver(() => Employment)
export class EmploymentResolverBase {
  constructor(protected readonly service: EmploymentService) {}

  async _employmentsMeta(
    @graphql.Args() args: EmploymentCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Employment])
  async employments(
    @graphql.Args() args: EmploymentFindManyArgs
  ): Promise<Employment[]> {
    return this.service.employments(args);
  }

  @graphql.Query(() => Employment, { nullable: true })
  async employment(
    @graphql.Args() args: EmploymentFindUniqueArgs
  ): Promise<Employment | null> {
    const result = await this.service.employment(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Employment)
  async createEmployment(
    @graphql.Args() args: CreateEmploymentArgs
  ): Promise<Employment> {
    return await this.service.createEmployment({
      ...args,
      data: {
        ...args.data,

        studentData: {
          connect: args.data.studentData,
        },
      },
    });
  }

  @graphql.Mutation(() => Employment)
  async updateEmployment(
    @graphql.Args() args: UpdateEmploymentArgs
  ): Promise<Employment | null> {
    try {
      return await this.service.updateEmployment({
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

  @graphql.Mutation(() => Employment)
  async deleteEmployment(
    @graphql.Args() args: DeleteEmploymentArgs
  ): Promise<Employment | null> {
    try {
      return await this.service.deleteEmployment(args);
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
    @graphql.Parent() parent: Employment
  ): Promise<StudentDatum | null> {
    const result = await this.service.getStudentData(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
