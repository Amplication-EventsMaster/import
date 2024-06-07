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
import { LegacyRequirementService } from "../legacyRequirement.service";
import { LegacyRequirementCreateInput } from "./LegacyRequirementCreateInput";
import { LegacyRequirement } from "./LegacyRequirement";
import { LegacyRequirementFindManyArgs } from "./LegacyRequirementFindManyArgs";
import { LegacyRequirementWhereUniqueInput } from "./LegacyRequirementWhereUniqueInput";
import { LegacyRequirementUpdateInput } from "./LegacyRequirementUpdateInput";

export class LegacyRequirementControllerBase {
  constructor(protected readonly service: LegacyRequirementService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: LegacyRequirement })
  async createLegacyRequirement(
    @common.Body() data: LegacyRequirementCreateInput
  ): Promise<LegacyRequirement> {
    return await this.service.createLegacyRequirement({
      data: {
        ...data,

        studentData: {
          connect: data.studentData,
        },
      },
      select: {
        course: true,
        id: true,
        requirementTitle: true,
        requirementType: true,

        studentData: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [LegacyRequirement] })
  @ApiNestedQuery(LegacyRequirementFindManyArgs)
  async legacyRequirements(
    @common.Req() request: Request
  ): Promise<LegacyRequirement[]> {
    const args = plainToClass(LegacyRequirementFindManyArgs, request.query);
    return this.service.legacyRequirements({
      ...args,
      select: {
        course: true,
        id: true,
        requirementTitle: true,
        requirementType: true,

        studentData: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: LegacyRequirement })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async legacyRequirement(
    @common.Param() params: LegacyRequirementWhereUniqueInput
  ): Promise<LegacyRequirement | null> {
    const result = await this.service.legacyRequirement({
      where: params,
      select: {
        course: true,
        id: true,
        requirementTitle: true,
        requirementType: true,

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
  @swagger.ApiOkResponse({ type: LegacyRequirement })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateLegacyRequirement(
    @common.Param() params: LegacyRequirementWhereUniqueInput,
    @common.Body() data: LegacyRequirementUpdateInput
  ): Promise<LegacyRequirement | null> {
    try {
      return await this.service.updateLegacyRequirement({
        where: params,
        data: {
          ...data,

          studentData: {
            connect: data.studentData,
          },
        },
        select: {
          course: true,
          id: true,
          requirementTitle: true,
          requirementType: true,

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
  @swagger.ApiOkResponse({ type: LegacyRequirement })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteLegacyRequirement(
    @common.Param() params: LegacyRequirementWhereUniqueInput
  ): Promise<LegacyRequirement | null> {
    try {
      return await this.service.deleteLegacyRequirement({
        where: params,
        select: {
          course: true,
          id: true,
          requirementTitle: true,
          requirementType: true,

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
