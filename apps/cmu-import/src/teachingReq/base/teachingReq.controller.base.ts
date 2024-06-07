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
import { TeachingReqService } from "../teachingReq.service";
import { TeachingReqCreateInput } from "./TeachingReqCreateInput";
import { TeachingReq } from "./TeachingReq";
import { TeachingReqFindManyArgs } from "./TeachingReqFindManyArgs";
import { TeachingReqWhereUniqueInput } from "./TeachingReqWhereUniqueInput";
import { TeachingReqUpdateInput } from "./TeachingReqUpdateInput";

export class TeachingReqControllerBase {
  constructor(protected readonly service: TeachingReqService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: TeachingReq })
  async createTeachingReq(
    @common.Body() data: TeachingReqCreateInput
  ): Promise<TeachingReq> {
    return await this.service.createTeachingReq({
      data: {
        ...data,

        studentData: {
          connect: data.studentData,
        },
      },
      select: {
        complete: true,
        courseNum: true,
        courseSection: true,
        date: true,
        departmentCode: true,
        id: true,
        pending: true,
        status: true,

        studentData: {
          select: {
            id: true,
          },
        },

        title: true,
        units: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [TeachingReq] })
  @ApiNestedQuery(TeachingReqFindManyArgs)
  async teachingReqs(@common.Req() request: Request): Promise<TeachingReq[]> {
    const args = plainToClass(TeachingReqFindManyArgs, request.query);
    return this.service.teachingReqs({
      ...args,
      select: {
        complete: true,
        courseNum: true,
        courseSection: true,
        date: true,
        departmentCode: true,
        id: true,
        pending: true,
        status: true,

        studentData: {
          select: {
            id: true,
          },
        },

        title: true,
        units: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: TeachingReq })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async teachingReq(
    @common.Param() params: TeachingReqWhereUniqueInput
  ): Promise<TeachingReq | null> {
    const result = await this.service.teachingReq({
      where: params,
      select: {
        complete: true,
        courseNum: true,
        courseSection: true,
        date: true,
        departmentCode: true,
        id: true,
        pending: true,
        status: true,

        studentData: {
          select: {
            id: true,
          },
        },

        title: true,
        units: true,
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
  @swagger.ApiOkResponse({ type: TeachingReq })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateTeachingReq(
    @common.Param() params: TeachingReqWhereUniqueInput,
    @common.Body() data: TeachingReqUpdateInput
  ): Promise<TeachingReq | null> {
    try {
      return await this.service.updateTeachingReq({
        where: params,
        data: {
          ...data,

          studentData: {
            connect: data.studentData,
          },
        },
        select: {
          complete: true,
          courseNum: true,
          courseSection: true,
          date: true,
          departmentCode: true,
          id: true,
          pending: true,
          status: true,

          studentData: {
            select: {
              id: true,
            },
          },

          title: true,
          units: true,
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
  @swagger.ApiOkResponse({ type: TeachingReq })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteTeachingReq(
    @common.Param() params: TeachingReqWhereUniqueInput
  ): Promise<TeachingReq | null> {
    try {
      return await this.service.deleteTeachingReq({
        where: params,
        select: {
          complete: true,
          courseNum: true,
          courseSection: true,
          date: true,
          departmentCode: true,
          id: true,
          pending: true,
          status: true,

          studentData: {
            select: {
              id: true,
            },
          },

          title: true,
          units: true,
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
