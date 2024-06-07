/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ReportService } from "../report.service";
import { ReportCreateInput } from "./ReportCreateInput";
import { Report } from "./Report";
import { ReportFindManyArgs } from "./ReportFindManyArgs";
import { ReportWhereUniqueInput } from "./ReportWhereUniqueInput";
import { ReportUpdateInput } from "./ReportUpdateInput";
import { ReportColumnFindManyArgs } from "../../reportColumn/base/ReportColumnFindManyArgs";
import { ReportColumn } from "../../reportColumn/base/ReportColumn";
import { ReportColumnWhereUniqueInput } from "../../reportColumn/base/ReportColumnWhereUniqueInput";
import { ReportDeptVisibilityFindManyArgs } from "../../reportDeptVisibility/base/ReportDeptVisibilityFindManyArgs";
import { ReportDeptVisibility } from "../../reportDeptVisibility/base/ReportDeptVisibility";
import { ReportDeptVisibilityWhereUniqueInput } from "../../reportDeptVisibility/base/ReportDeptVisibilityWhereUniqueInput";

export class ReportControllerBase {
  constructor(protected readonly service: ReportService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Report })
  async createReport(@common.Body() data: ReportCreateInput): Promise<Report> {
    return await this.service.createReport({
      data: data,
      select: {
        id: true,
        reportQuery: true,
        reportTitle: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Report] })
  @ApiNestedQuery(ReportFindManyArgs)
  async reports(@common.Req() request: Request): Promise<Report[]> {
    const args = plainToClass(ReportFindManyArgs, request.query);
    return this.service.reports({
      ...args,
      select: {
        id: true,
        reportQuery: true,
        reportTitle: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Report })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async report(
    @common.Param() params: ReportWhereUniqueInput
  ): Promise<Report | null> {
    const result = await this.service.report({
      where: params,
      select: {
        id: true,
        reportQuery: true,
        reportTitle: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Report })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateReport(
    @common.Param() params: ReportWhereUniqueInput,
    @common.Body() data: ReportUpdateInput
  ): Promise<Report | null> {
    try {
      return await this.service.updateReport({
        where: params,
        data: data,
        select: {
          id: true,
          reportQuery: true,
          reportTitle: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Report })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteReport(
    @common.Param() params: ReportWhereUniqueInput
  ): Promise<Report | null> {
    try {
      return await this.service.deleteReport({
        where: params,
        select: {
          id: true,
          reportQuery: true,
          reportTitle: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/reportColumns")
  @ApiNestedQuery(ReportColumnFindManyArgs)
  async findReportColumns(
    @common.Req() request: Request,
    @common.Param() params: ReportWhereUniqueInput
  ): Promise<ReportColumn[]> {
    const query = plainToClass(ReportColumnFindManyArgs, request.query);
    const results = await this.service.findReportColumns(params.id, {
      ...query,
      select: {
        columnFormat: true,
        columnName: true,
        columnSortable: true,
        columnTitle: true,
        id: true,

        reports: {
          select: {
            id: true,
          },
        },

        sortOrder: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/reportColumns")
  async connectReportColumns(
    @common.Param() params: ReportWhereUniqueInput,
    @common.Body() body: ReportColumnWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reportColumns: {
        connect: body,
      },
    };
    await this.service.updateReport({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/reportColumns")
  async updateReportColumns(
    @common.Param() params: ReportWhereUniqueInput,
    @common.Body() body: ReportColumnWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reportColumns: {
        set: body,
      },
    };
    await this.service.updateReport({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/reportColumns")
  async disconnectReportColumns(
    @common.Param() params: ReportWhereUniqueInput,
    @common.Body() body: ReportColumnWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reportColumns: {
        disconnect: body,
      },
    };
    await this.service.updateReport({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/reportDeptVisibility")
  @ApiNestedQuery(ReportDeptVisibilityFindManyArgs)
  async findReportDeptVisibility(
    @common.Req() request: Request,
    @common.Param() params: ReportWhereUniqueInput
  ): Promise<ReportDeptVisibility[]> {
    const query = plainToClass(ReportDeptVisibilityFindManyArgs, request.query);
    const results = await this.service.findReportDeptVisibility(params.id, {
      ...query,
      select: {
        department: true,
        id: true,

        reports: {
          select: {
            id: true,
          },
        },

        visible: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/reportDeptVisibility")
  async connectReportDeptVisibility(
    @common.Param() params: ReportWhereUniqueInput,
    @common.Body() body: ReportDeptVisibilityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reportDeptVisibility: {
        connect: body,
      },
    };
    await this.service.updateReport({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/reportDeptVisibility")
  async updateReportDeptVisibility(
    @common.Param() params: ReportWhereUniqueInput,
    @common.Body() body: ReportDeptVisibilityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reportDeptVisibility: {
        set: body,
      },
    };
    await this.service.updateReport({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/reportDeptVisibility")
  async disconnectReportDeptVisibility(
    @common.Param() params: ReportWhereUniqueInput,
    @common.Body() body: ReportDeptVisibilityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reportDeptVisibility: {
        disconnect: body,
      },
    };
    await this.service.updateReport({
      where: params,
      data,
      select: { id: true },
    });
  }
}
