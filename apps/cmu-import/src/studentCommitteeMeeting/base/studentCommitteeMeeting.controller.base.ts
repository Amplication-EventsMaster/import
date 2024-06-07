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
import { StudentCommitteeMeetingService } from "../studentCommitteeMeeting.service";
import { StudentCommitteeMeetingCreateInput } from "./StudentCommitteeMeetingCreateInput";
import { StudentCommitteeMeeting } from "./StudentCommitteeMeeting";
import { StudentCommitteeMeetingFindManyArgs } from "./StudentCommitteeMeetingFindManyArgs";
import { StudentCommitteeMeetingWhereUniqueInput } from "./StudentCommitteeMeetingWhereUniqueInput";
import { StudentCommitteeMeetingUpdateInput } from "./StudentCommitteeMeetingUpdateInput";

export class StudentCommitteeMeetingControllerBase {
  constructor(protected readonly service: StudentCommitteeMeetingService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: StudentCommitteeMeeting })
  async createStudentCommitteeMeeting(
    @common.Body() data: StudentCommitteeMeetingCreateInput
  ): Promise<StudentCommitteeMeeting> {
    return await this.service.createStudentCommitteeMeeting({
      data: data,
      select: {
        id: true,
        meetingDate: true,
        studentId: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [StudentCommitteeMeeting] })
  @ApiNestedQuery(StudentCommitteeMeetingFindManyArgs)
  async studentCommitteeMeetings(
    @common.Req() request: Request
  ): Promise<StudentCommitteeMeeting[]> {
    const args = plainToClass(
      StudentCommitteeMeetingFindManyArgs,
      request.query
    );
    return this.service.studentCommitteeMeetings({
      ...args,
      select: {
        id: true,
        meetingDate: true,
        studentId: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: StudentCommitteeMeeting })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async studentCommitteeMeeting(
    @common.Param() params: StudentCommitteeMeetingWhereUniqueInput
  ): Promise<StudentCommitteeMeeting | null> {
    const result = await this.service.studentCommitteeMeeting({
      where: params,
      select: {
        id: true,
        meetingDate: true,
        studentId: true,
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
  @swagger.ApiOkResponse({ type: StudentCommitteeMeeting })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateStudentCommitteeMeeting(
    @common.Param() params: StudentCommitteeMeetingWhereUniqueInput,
    @common.Body() data: StudentCommitteeMeetingUpdateInput
  ): Promise<StudentCommitteeMeeting | null> {
    try {
      return await this.service.updateStudentCommitteeMeeting({
        where: params,
        data: data,
        select: {
          id: true,
          meetingDate: true,
          studentId: true,
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
  @swagger.ApiOkResponse({ type: StudentCommitteeMeeting })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteStudentCommitteeMeeting(
    @common.Param() params: StudentCommitteeMeetingWhereUniqueInput
  ): Promise<StudentCommitteeMeeting | null> {
    try {
      return await this.service.deleteStudentCommitteeMeeting({
        where: params,
        select: {
          id: true,
          meetingDate: true,
          studentId: true,
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
