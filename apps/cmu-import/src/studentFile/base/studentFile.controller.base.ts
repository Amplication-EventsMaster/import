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
import { StudentFileService } from "../studentFile.service";
import { StudentFileCreateInput } from "./StudentFileCreateInput";
import { StudentFile } from "./StudentFile";
import { StudentFileFindManyArgs } from "./StudentFileFindManyArgs";
import { StudentFileWhereUniqueInput } from "./StudentFileWhereUniqueInput";
import { StudentFileUpdateInput } from "./StudentFileUpdateInput";

export class StudentFileControllerBase {
  constructor(protected readonly service: StudentFileService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: StudentFile })
  async createStudentFile(
    @common.Body() data: StudentFileCreateInput
  ): Promise<StudentFile> {
    return await this.service.createStudentFile({
      data: {
        ...data,

        studentData: {
          connect: data.studentData,
        },
      },
      select: {
        fileChanges: true,
        fileDate: true,
        fileDesc: true,
        fileName: true,
        fileType: true,
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
  @swagger.ApiOkResponse({ type: [StudentFile] })
  @ApiNestedQuery(StudentFileFindManyArgs)
  async studentFiles(@common.Req() request: Request): Promise<StudentFile[]> {
    const args = plainToClass(StudentFileFindManyArgs, request.query);
    return this.service.studentFiles({
      ...args,
      select: {
        fileChanges: true,
        fileDate: true,
        fileDesc: true,
        fileName: true,
        fileType: true,
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
  @swagger.ApiOkResponse({ type: StudentFile })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async studentFile(
    @common.Param() params: StudentFileWhereUniqueInput
  ): Promise<StudentFile | null> {
    const result = await this.service.studentFile({
      where: params,
      select: {
        fileChanges: true,
        fileDate: true,
        fileDesc: true,
        fileName: true,
        fileType: true,
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
  @swagger.ApiOkResponse({ type: StudentFile })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateStudentFile(
    @common.Param() params: StudentFileWhereUniqueInput,
    @common.Body() data: StudentFileUpdateInput
  ): Promise<StudentFile | null> {
    try {
      return await this.service.updateStudentFile({
        where: params,
        data: {
          ...data,

          studentData: {
            connect: data.studentData,
          },
        },
        select: {
          fileChanges: true,
          fileDate: true,
          fileDesc: true,
          fileName: true,
          fileType: true,
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
  @swagger.ApiOkResponse({ type: StudentFile })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteStudentFile(
    @common.Param() params: StudentFileWhereUniqueInput
  ): Promise<StudentFile | null> {
    try {
      return await this.service.deleteStudentFile({
        where: params,
        select: {
          fileChanges: true,
          fileDate: true,
          fileDesc: true,
          fileName: true,
          fileType: true,
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
