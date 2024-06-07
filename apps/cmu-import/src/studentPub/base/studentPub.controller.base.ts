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
import { StudentPubService } from "../studentPub.service";
import { StudentPubCreateInput } from "./StudentPubCreateInput";
import { StudentPub } from "./StudentPub";
import { StudentPubFindManyArgs } from "./StudentPubFindManyArgs";
import { StudentPubWhereUniqueInput } from "./StudentPubWhereUniqueInput";
import { StudentPubUpdateInput } from "./StudentPubUpdateInput";

export class StudentPubControllerBase {
  constructor(protected readonly service: StudentPubService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: StudentPub })
  async createStudentPub(
    @common.Body() data: StudentPubCreateInput
  ): Promise<StudentPub> {
    return await this.service.createStudentPub({
      data: {
        ...data,

        studentData: {
          connect: data.studentData,
        },
      },
      select: {
        authors: true,
        citation: true,
        forum: true,
        id: true,
        pubDate: true,
        sfId: true,
        status: true,

        studentData: {
          select: {
            id: true,
          },
        },

        title: true,
        url: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [StudentPub] })
  @ApiNestedQuery(StudentPubFindManyArgs)
  async studentPubs(@common.Req() request: Request): Promise<StudentPub[]> {
    const args = plainToClass(StudentPubFindManyArgs, request.query);
    return this.service.studentPubs({
      ...args,
      select: {
        authors: true,
        citation: true,
        forum: true,
        id: true,
        pubDate: true,
        sfId: true,
        status: true,

        studentData: {
          select: {
            id: true,
          },
        },

        title: true,
        url: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: StudentPub })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async studentPub(
    @common.Param() params: StudentPubWhereUniqueInput
  ): Promise<StudentPub | null> {
    const result = await this.service.studentPub({
      where: params,
      select: {
        authors: true,
        citation: true,
        forum: true,
        id: true,
        pubDate: true,
        sfId: true,
        status: true,

        studentData: {
          select: {
            id: true,
          },
        },

        title: true,
        url: true,
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
  @swagger.ApiOkResponse({ type: StudentPub })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateStudentPub(
    @common.Param() params: StudentPubWhereUniqueInput,
    @common.Body() data: StudentPubUpdateInput
  ): Promise<StudentPub | null> {
    try {
      return await this.service.updateStudentPub({
        where: params,
        data: {
          ...data,

          studentData: {
            connect: data.studentData,
          },
        },
        select: {
          authors: true,
          citation: true,
          forum: true,
          id: true,
          pubDate: true,
          sfId: true,
          status: true,

          studentData: {
            select: {
              id: true,
            },
          },

          title: true,
          url: true,
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
  @swagger.ApiOkResponse({ type: StudentPub })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteStudentPub(
    @common.Param() params: StudentPubWhereUniqueInput
  ): Promise<StudentPub | null> {
    try {
      return await this.service.deleteStudentPub({
        where: params,
        select: {
          authors: true,
          citation: true,
          forum: true,
          id: true,
          pubDate: true,
          sfId: true,
          status: true,

          studentData: {
            select: {
              id: true,
            },
          },

          title: true,
          url: true,
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
