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
import { StudentSkill } from "./StudentSkill";
import { StudentSkillCountArgs } from "./StudentSkillCountArgs";
import { StudentSkillFindManyArgs } from "./StudentSkillFindManyArgs";
import { StudentSkillFindUniqueArgs } from "./StudentSkillFindUniqueArgs";
import { CreateStudentSkillArgs } from "./CreateStudentSkillArgs";
import { UpdateStudentSkillArgs } from "./UpdateStudentSkillArgs";
import { DeleteStudentSkillArgs } from "./DeleteStudentSkillArgs";
import { StudentDatum } from "../../studentDatum/base/StudentDatum";
import { StudentSkillService } from "../studentSkill.service";
@graphql.Resolver(() => StudentSkill)
export class StudentSkillResolverBase {
  constructor(protected readonly service: StudentSkillService) {}

  async _studentSkillsMeta(
    @graphql.Args() args: StudentSkillCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [StudentSkill])
  async studentSkills(
    @graphql.Args() args: StudentSkillFindManyArgs
  ): Promise<StudentSkill[]> {
    return this.service.studentSkills(args);
  }

  @graphql.Query(() => StudentSkill, { nullable: true })
  async studentSkill(
    @graphql.Args() args: StudentSkillFindUniqueArgs
  ): Promise<StudentSkill | null> {
    const result = await this.service.studentSkill(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => StudentSkill)
  async createStudentSkill(
    @graphql.Args() args: CreateStudentSkillArgs
  ): Promise<StudentSkill> {
    return await this.service.createStudentSkill({
      ...args,
      data: {
        ...args.data,

        studentData: {
          connect: args.data.studentData,
        },
      },
    });
  }

  @graphql.Mutation(() => StudentSkill)
  async updateStudentSkill(
    @graphql.Args() args: UpdateStudentSkillArgs
  ): Promise<StudentSkill | null> {
    try {
      return await this.service.updateStudentSkill({
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

  @graphql.Mutation(() => StudentSkill)
  async deleteStudentSkill(
    @graphql.Args() args: DeleteStudentSkillArgs
  ): Promise<StudentSkill | null> {
    try {
      return await this.service.deleteStudentSkill(args);
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
    @graphql.Parent() parent: StudentSkill
  ): Promise<StudentDatum | null> {
    const result = await this.service.getStudentData(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
