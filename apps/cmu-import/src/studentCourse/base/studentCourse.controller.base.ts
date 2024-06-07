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
import { StudentCourseService } from "../studentCourse.service";
import { StudentCourseCreateInput } from "./StudentCourseCreateInput";
import { StudentCourse } from "./StudentCourse";
import { StudentCourseFindManyArgs } from "./StudentCourseFindManyArgs";
import { StudentCourseWhereUniqueInput } from "./StudentCourseWhereUniqueInput";
import { StudentCourseUpdateInput } from "./StudentCourseUpdateInput";

export class StudentCourseControllerBase {
  constructor(protected readonly service: StudentCourseService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: StudentCourse })
  async createStudentCourse(
    @common.Body() data: StudentCourseCreateInput
  ): Promise<StudentCourse> {
    return await this.service.createStudentCourse({
      data: data,
      select: {
        applicable: true,
        courseNum: true,
        courseSection: true,
        customLabel: true,
        date: true,
        departmentCode: true,
        grade: true,
        id: true,
        midtermGrade: true,
        note: true,
        qpoints: true,
        requirementType: true,
        shortTitle: true,
        studentId: true,
        title: true,
        transfercredit: true,
        units: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [StudentCourse] })
  @ApiNestedQuery(StudentCourseFindManyArgs)
  async studentCourses(
    @common.Req() request: Request
  ): Promise<StudentCourse[]> {
    const args = plainToClass(StudentCourseFindManyArgs, request.query);
    return this.service.studentCourses({
      ...args,
      select: {
        applicable: true,
        courseNum: true,
        courseSection: true,
        customLabel: true,
        date: true,
        departmentCode: true,
        grade: true,
        id: true,
        midtermGrade: true,
        note: true,
        qpoints: true,
        requirementType: true,
        shortTitle: true,
        studentId: true,
        title: true,
        transfercredit: true,
        units: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: StudentCourse })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async studentCourse(
    @common.Param() params: StudentCourseWhereUniqueInput
  ): Promise<StudentCourse | null> {
    const result = await this.service.studentCourse({
      where: params,
      select: {
        applicable: true,
        courseNum: true,
        courseSection: true,
        customLabel: true,
        date: true,
        departmentCode: true,
        grade: true,
        id: true,
        midtermGrade: true,
        note: true,
        qpoints: true,
        requirementType: true,
        shortTitle: true,
        studentId: true,
        title: true,
        transfercredit: true,
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
  @swagger.ApiOkResponse({ type: StudentCourse })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateStudentCourse(
    @common.Param() params: StudentCourseWhereUniqueInput,
    @common.Body() data: StudentCourseUpdateInput
  ): Promise<StudentCourse | null> {
    try {
      return await this.service.updateStudentCourse({
        where: params,
        data: data,
        select: {
          applicable: true,
          courseNum: true,
          courseSection: true,
          customLabel: true,
          date: true,
          departmentCode: true,
          grade: true,
          id: true,
          midtermGrade: true,
          note: true,
          qpoints: true,
          requirementType: true,
          shortTitle: true,
          studentId: true,
          title: true,
          transfercredit: true,
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
  @swagger.ApiOkResponse({ type: StudentCourse })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteStudentCourse(
    @common.Param() params: StudentCourseWhereUniqueInput
  ): Promise<StudentCourse | null> {
    try {
      return await this.service.deleteStudentCourse({
        where: params,
        select: {
          applicable: true,
          courseNum: true,
          courseSection: true,
          customLabel: true,
          date: true,
          departmentCode: true,
          grade: true,
          id: true,
          midtermGrade: true,
          note: true,
          qpoints: true,
          requirementType: true,
          shortTitle: true,
          studentId: true,
          title: true,
          transfercredit: true,
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
