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
import { ThesisTopicService } from "../thesisTopic.service";
import { ThesisTopicCreateInput } from "./ThesisTopicCreateInput";
import { ThesisTopic } from "./ThesisTopic";
import { ThesisTopicFindManyArgs } from "./ThesisTopicFindManyArgs";
import { ThesisTopicWhereUniqueInput } from "./ThesisTopicWhereUniqueInput";
import { ThesisTopicUpdateInput } from "./ThesisTopicUpdateInput";

export class ThesisTopicControllerBase {
  constructor(protected readonly service: ThesisTopicService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ThesisTopic })
  async createThesisTopic(
    @common.Body() data: ThesisTopicCreateInput
  ): Promise<ThesisTopic> {
    return await this.service.createThesisTopic({
      data: {
        ...data,

        studentData: {
          connect: data.studentData,
        },
      },
      select: {
        date: true,
        defenseComplete: true,
        defenseDate: true,
        defensePending: true,
        defenseTitle: true,
        id: true,
        pending: true,
        proposalComplete: true,

        studentData: {
          select: {
            id: true,
          },
        },

        title: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ThesisTopic] })
  @ApiNestedQuery(ThesisTopicFindManyArgs)
  async thesisTopics(@common.Req() request: Request): Promise<ThesisTopic[]> {
    const args = plainToClass(ThesisTopicFindManyArgs, request.query);
    return this.service.thesisTopics({
      ...args,
      select: {
        date: true,
        defenseComplete: true,
        defenseDate: true,
        defensePending: true,
        defenseTitle: true,
        id: true,
        pending: true,
        proposalComplete: true,

        studentData: {
          select: {
            id: true,
          },
        },

        title: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ThesisTopic })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async thesisTopic(
    @common.Param() params: ThesisTopicWhereUniqueInput
  ): Promise<ThesisTopic | null> {
    const result = await this.service.thesisTopic({
      where: params,
      select: {
        date: true,
        defenseComplete: true,
        defenseDate: true,
        defensePending: true,
        defenseTitle: true,
        id: true,
        pending: true,
        proposalComplete: true,

        studentData: {
          select: {
            id: true,
          },
        },

        title: true,
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
  @swagger.ApiOkResponse({ type: ThesisTopic })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateThesisTopic(
    @common.Param() params: ThesisTopicWhereUniqueInput,
    @common.Body() data: ThesisTopicUpdateInput
  ): Promise<ThesisTopic | null> {
    try {
      return await this.service.updateThesisTopic({
        where: params,
        data: {
          ...data,

          studentData: {
            connect: data.studentData,
          },
        },
        select: {
          date: true,
          defenseComplete: true,
          defenseDate: true,
          defensePending: true,
          defenseTitle: true,
          id: true,
          pending: true,
          proposalComplete: true,

          studentData: {
            select: {
              id: true,
            },
          },

          title: true,
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
  @swagger.ApiOkResponse({ type: ThesisTopic })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteThesisTopic(
    @common.Param() params: ThesisTopicWhereUniqueInput
  ): Promise<ThesisTopic | null> {
    try {
      return await this.service.deleteThesisTopic({
        where: params,
        select: {
          date: true,
          defenseComplete: true,
          defenseDate: true,
          defensePending: true,
          defenseTitle: true,
          id: true,
          pending: true,
          proposalComplete: true,

          studentData: {
            select: {
              id: true,
            },
          },

          title: true,
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
