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
import { ReportDeptVisibilityService } from "../reportDeptVisibility.service";
import { ReportDeptVisibilityCreateInput } from "./ReportDeptVisibilityCreateInput";
import { ReportDeptVisibility } from "./ReportDeptVisibility";
import { ReportDeptVisibilityFindManyArgs } from "./ReportDeptVisibilityFindManyArgs";
import { ReportDeptVisibilityWhereUniqueInput } from "./ReportDeptVisibilityWhereUniqueInput";
import { ReportDeptVisibilityUpdateInput } from "./ReportDeptVisibilityUpdateInput";

export class ReportDeptVisibilityControllerBase {
  constructor(protected readonly service: ReportDeptVisibilityService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ReportDeptVisibility })
  async createReportDeptVisibility(
    @common.Body() data: ReportDeptVisibilityCreateInput
  ): Promise<ReportDeptVisibility> {
    return await this.service.createReportDeptVisibility({
      data: {
        ...data,

        reports: {
          connect: data.reports,
        },
      },
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
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ReportDeptVisibility] })
  @ApiNestedQuery(ReportDeptVisibilityFindManyArgs)
  async reportDeptVisibilities(
    @common.Req() request: Request
  ): Promise<ReportDeptVisibility[]> {
    const args = plainToClass(ReportDeptVisibilityFindManyArgs, request.query);
    return this.service.reportDeptVisibilities({
      ...args,
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
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ReportDeptVisibility })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async reportDeptVisibility(
    @common.Param() params: ReportDeptVisibilityWhereUniqueInput
  ): Promise<ReportDeptVisibility | null> {
    const result = await this.service.reportDeptVisibility({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ReportDeptVisibility })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateReportDeptVisibility(
    @common.Param() params: ReportDeptVisibilityWhereUniqueInput,
    @common.Body() data: ReportDeptVisibilityUpdateInput
  ): Promise<ReportDeptVisibility | null> {
    try {
      return await this.service.updateReportDeptVisibility({
        where: params,
        data: {
          ...data,

          reports: {
            connect: data.reports,
          },
        },
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
  @swagger.ApiOkResponse({ type: ReportDeptVisibility })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteReportDeptVisibility(
    @common.Param() params: ReportDeptVisibilityWhereUniqueInput
  ): Promise<ReportDeptVisibility | null> {
    try {
      return await this.service.deleteReportDeptVisibility({
        where: params,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
