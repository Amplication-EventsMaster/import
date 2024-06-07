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
import { StudentDataMl } from "./StudentDataMl";
import { StudentDataMlCountArgs } from "./StudentDataMlCountArgs";
import { StudentDataMlFindManyArgs } from "./StudentDataMlFindManyArgs";
import { StudentDataMlFindUniqueArgs } from "./StudentDataMlFindUniqueArgs";
import { CreateStudentDataMlArgs } from "./CreateStudentDataMlArgs";
import { UpdateStudentDataMlArgs } from "./UpdateStudentDataMlArgs";
import { DeleteStudentDataMlArgs } from "./DeleteStudentDataMlArgs";
import { StudentDatum } from "../../studentDatum/base/StudentDatum";
import { StudentDataMlService } from "../studentDataMl.service";
@graphql.Resolver(() => StudentDataMl)
export class StudentDataMlResolverBase {
  constructor(protected readonly service: StudentDataMlService) {}

  async _studentDataMlsMeta(
    @graphql.Args() args: StudentDataMlCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [StudentDataMl])
  async studentDataMls(
    @graphql.Args() args: StudentDataMlFindManyArgs
  ): Promise<StudentDataMl[]> {
    return this.service.studentDataMls(args);
  }

  @graphql.Query(() => StudentDataMl, { nullable: true })
  async studentDataMl(
    @graphql.Args() args: StudentDataMlFindUniqueArgs
  ): Promise<StudentDataMl | null> {
    const result = await this.service.studentDataMl(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => StudentDataMl)
  async createStudentDataMl(
    @graphql.Args() args: CreateStudentDataMlArgs
  ): Promise<StudentDataMl> {
    return await this.service.createStudentDataMl({
      ...args,
      data: {
        ...args.data,

        studentData: {
          connect: args.data.studentData,
        },
      },
    });
  }

  @graphql.Mutation(() => StudentDataMl)
  async updateStudentDataMl(
    @graphql.Args() args: UpdateStudentDataMlArgs
  ): Promise<StudentDataMl | null> {
    try {
      return await this.service.updateStudentDataMl({
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

  @graphql.Mutation(() => StudentDataMl)
  async deleteStudentDataMl(
    @graphql.Args() args: DeleteStudentDataMlArgs
  ): Promise<StudentDataMl | null> {
    try {
      return await this.service.deleteStudentDataMl(args);
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
    @graphql.Parent() parent: StudentDataMl
  ): Promise<StudentDatum | null> {
    const result = await this.service.getStudentData(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
