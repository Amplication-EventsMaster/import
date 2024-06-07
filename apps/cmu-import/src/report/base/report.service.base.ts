/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Report as PrismaReport,
  ReportColumn as PrismaReportColumn,
  ReportDeptVisibility as PrismaReportDeptVisibility,
} from "@prisma/client";

export class ReportServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ReportCountArgs, "select">): Promise<number> {
    return this.prisma.report.count(args);
  }

  async reports<T extends Prisma.ReportFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReportFindManyArgs>
  ): Promise<PrismaReport[]> {
    return this.prisma.report.findMany<Prisma.ReportFindManyArgs>(args);
  }
  async report<T extends Prisma.ReportFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReportFindUniqueArgs>
  ): Promise<PrismaReport | null> {
    return this.prisma.report.findUnique(args);
  }
  async createReport<T extends Prisma.ReportCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReportCreateArgs>
  ): Promise<PrismaReport> {
    return this.prisma.report.create<T>(args);
  }
  async updateReport<T extends Prisma.ReportUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReportUpdateArgs>
  ): Promise<PrismaReport> {
    return this.prisma.report.update<T>(args);
  }
  async deleteReport<T extends Prisma.ReportDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReportDeleteArgs>
  ): Promise<PrismaReport> {
    return this.prisma.report.delete(args);
  }

  async findReportColumns(
    parentId: number,
    args: Prisma.ReportColumnFindManyArgs
  ): Promise<PrismaReportColumn[]> {
    return this.prisma.report
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .reportColumns(args);
  }

  async findReportDeptVisibility(
    parentId: number,
    args: Prisma.ReportDeptVisibilityFindManyArgs
  ): Promise<PrismaReportDeptVisibility[]> {
    return this.prisma.report
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .reportDeptVisibility(args);
  }
}
