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
import { ReportColumn } from "./ReportColumn";
import { ReportColumnCountArgs } from "./ReportColumnCountArgs";
import { ReportColumnFindManyArgs } from "./ReportColumnFindManyArgs";
import { ReportColumnFindUniqueArgs } from "./ReportColumnFindUniqueArgs";
import { CreateReportColumnArgs } from "./CreateReportColumnArgs";
import { UpdateReportColumnArgs } from "./UpdateReportColumnArgs";
import { DeleteReportColumnArgs } from "./DeleteReportColumnArgs";
import { Report } from "../../report/base/Report";
import { ReportColumnService } from "../reportColumn.service";
@graphql.Resolver(() => ReportColumn)
export class ReportColumnResolverBase {
  constructor(protected readonly service: ReportColumnService) {}

  async _reportColumnsMeta(
    @graphql.Args() args: ReportColumnCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ReportColumn])
  async reportColumns(
    @graphql.Args() args: ReportColumnFindManyArgs
  ): Promise<ReportColumn[]> {
    return this.service.reportColumns(args);
  }

  @graphql.Query(() => ReportColumn, { nullable: true })
  async reportColumn(
    @graphql.Args() args: ReportColumnFindUniqueArgs
  ): Promise<ReportColumn | null> {
    const result = await this.service.reportColumn(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ReportColumn)
  async createReportColumn(
    @graphql.Args() args: CreateReportColumnArgs
  ): Promise<ReportColumn> {
    return await this.service.createReportColumn({
      ...args,
      data: {
        ...args.data,

        reports: {
          connect: args.data.reports,
        },
      },
    });
  }

  @graphql.Mutation(() => ReportColumn)
  async updateReportColumn(
    @graphql.Args() args: UpdateReportColumnArgs
  ): Promise<ReportColumn | null> {
    try {
      return await this.service.updateReportColumn({
        ...args,
        data: {
          ...args.data,

          reports: {
            connect: args.data.reports,
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

  @graphql.Mutation(() => ReportColumn)
  async deleteReportColumn(
    @graphql.Args() args: DeleteReportColumnArgs
  ): Promise<ReportColumn | null> {
    try {
      return await this.service.deleteReportColumn(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Report, {
    nullable: true,
    name: "reports",
  })
  async getReports(
    @graphql.Parent() parent: ReportColumn
  ): Promise<Report | null> {
    const result = await this.service.getReports(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
