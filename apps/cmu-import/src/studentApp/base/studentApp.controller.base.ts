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
import { StudentAppService } from "../studentApp.service";
import { StudentAppCreateInput } from "./StudentAppCreateInput";
import { StudentApp } from "./StudentApp";
import { StudentAppFindManyArgs } from "./StudentAppFindManyArgs";
import { StudentAppWhereUniqueInput } from "./StudentAppWhereUniqueInput";
import { StudentAppUpdateInput } from "./StudentAppUpdateInput";

export class StudentAppControllerBase {
  constructor(protected readonly service: StudentAppService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: StudentApp })
  async createStudentApp(
    @common.Body() data: StudentAppCreateInput
  ): Promise<StudentApp> {
    return await this.service.createStudentApp({
      data: {
        ...data,

        studentData: {
          connect: data.studentData,
        },
      },
      select: {
        appId: true,
        id: true,

        studentData: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [StudentApp] })
  @ApiNestedQuery(StudentAppFindManyArgs)
  async studentApps(@common.Req() request: Request): Promise<StudentApp[]> {
    const args = plainToClass(StudentAppFindManyArgs, request.query);
    return this.service.studentApps({
      ...args,
      select: {
        appId: true,
        id: true,

        studentData: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: StudentApp })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async studentApp(
    @common.Param() params: StudentAppWhereUniqueInput
  ): Promise<StudentApp | null> {
    const result = await this.service.studentApp({
      where: params,
      select: {
        appId: true,
        id: true,

        studentData: {
          select: {
            id: true,
          },
        },
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
  @swagger.ApiOkResponse({ type: StudentApp })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateStudentApp(
    @common.Param() params: StudentAppWhereUniqueInput,
    @common.Body() data: StudentAppUpdateInput
  ): Promise<StudentApp | null> {
    try {
      return await this.service.updateStudentApp({
        where: params,
        data: {
          ...data,

          studentData: {
            connect: data.studentData,
          },
        },
        select: {
          appId: true,
          id: true,

          studentData: {
            select: {
              id: true,
            },
          },
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
  @swagger.ApiOkResponse({ type: StudentApp })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteStudentApp(
    @common.Param() params: StudentAppWhereUniqueInput
  ): Promise<StudentApp | null> {
    try {
      return await this.service.deleteStudentApp({
        where: params,
        select: {
          appId: true,
          id: true,

          studentData: {
            select: {
              id: true,
            },
          },
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
