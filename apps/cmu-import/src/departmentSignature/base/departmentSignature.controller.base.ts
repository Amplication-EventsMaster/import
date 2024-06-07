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
import { DepartmentSignatureService } from "../departmentSignature.service";
import { DepartmentSignatureCreateInput } from "./DepartmentSignatureCreateInput";
import { DepartmentSignature } from "./DepartmentSignature";
import { DepartmentSignatureFindManyArgs } from "./DepartmentSignatureFindManyArgs";
import { DepartmentSignatureWhereUniqueInput } from "./DepartmentSignatureWhereUniqueInput";
import { DepartmentSignatureUpdateInput } from "./DepartmentSignatureUpdateInput";

export class DepartmentSignatureControllerBase {
  constructor(protected readonly service: DepartmentSignatureService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: DepartmentSignature })
  async createDepartmentSignature(
    @common.Body() data: DepartmentSignatureCreateInput
  ): Promise<DepartmentSignature> {
    return await this.service.createDepartmentSignature({
      data: data,
      select: {
        department: true,
        id: true,
        sigblock: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [DepartmentSignature] })
  @ApiNestedQuery(DepartmentSignatureFindManyArgs)
  async departmentSignatures(
    @common.Req() request: Request
  ): Promise<DepartmentSignature[]> {
    const args = plainToClass(DepartmentSignatureFindManyArgs, request.query);
    return this.service.departmentSignatures({
      ...args,
      select: {
        department: true,
        id: true,
        sigblock: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: DepartmentSignature })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async departmentSignature(
    @common.Param() params: DepartmentSignatureWhereUniqueInput
  ): Promise<DepartmentSignature | null> {
    const result = await this.service.departmentSignature({
      where: params,
      select: {
        department: true,
        id: true,
        sigblock: true,
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
  @swagger.ApiOkResponse({ type: DepartmentSignature })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateDepartmentSignature(
    @common.Param() params: DepartmentSignatureWhereUniqueInput,
    @common.Body() data: DepartmentSignatureUpdateInput
  ): Promise<DepartmentSignature | null> {
    try {
      return await this.service.updateDepartmentSignature({
        where: params,
        data: data,
        select: {
          department: true,
          id: true,
          sigblock: true,
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
  @swagger.ApiOkResponse({ type: DepartmentSignature })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteDepartmentSignature(
    @common.Param() params: DepartmentSignatureWhereUniqueInput
  ): Promise<DepartmentSignature | null> {
    try {
      return await this.service.deleteDepartmentSignature({
        where: params,
        select: {
          department: true,
          id: true,
          sigblock: true,
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
