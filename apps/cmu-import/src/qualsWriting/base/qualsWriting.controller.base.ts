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
import { QualsWritingService } from "../qualsWriting.service";
import { QualsWritingCreateInput } from "./QualsWritingCreateInput";
import { QualsWriting } from "./QualsWriting";
import { QualsWritingFindManyArgs } from "./QualsWritingFindManyArgs";
import { QualsWritingWhereUniqueInput } from "./QualsWritingWhereUniqueInput";
import { QualsWritingUpdateInput } from "./QualsWritingUpdateInput";
import { QualsWritingAspectFindManyArgs } from "../../qualsWritingAspect/base/QualsWritingAspectFindManyArgs";
import { QualsWritingAspect } from "../../qualsWritingAspect/base/QualsWritingAspect";
import { QualsWritingAspectWhereUniqueInput } from "../../qualsWritingAspect/base/QualsWritingAspectWhereUniqueInput";

export class QualsWritingControllerBase {
  constructor(protected readonly service: QualsWritingService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: QualsWriting })
  async createQualsWriting(
    @common.Body() data: QualsWritingCreateInput
  ): Promise<QualsWriting> {
    return await this.service.createQualsWriting({
      data: {
        ...data,

        qualsCommittee: data.qualsCommittee
          ? {
              connect: data.qualsCommittee,
            }
          : undefined,
      },
      select: {
        engaging_reader: true,
        engagingReaderExp: true,
        id: true,
        organization: true,
        organizationExp: true,
        overall: true,
        overallExp: true,

        qualsCommittee: {
          select: {
            id: true,
          },
        },

        status: true,
        studentId: true,
        summaryAudience: true,
        summaryTopic: true,
        timestamp: true,
        urId: true,
        writing_style: true,
        writingStyleExp: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [QualsWriting] })
  @ApiNestedQuery(QualsWritingFindManyArgs)
  async qualsWritings(@common.Req() request: Request): Promise<QualsWriting[]> {
    const args = plainToClass(QualsWritingFindManyArgs, request.query);
    return this.service.qualsWritings({
      ...args,
      select: {
        engaging_reader: true,
        engagingReaderExp: true,
        id: true,
        organization: true,
        organizationExp: true,
        overall: true,
        overallExp: true,

        qualsCommittee: {
          select: {
            id: true,
          },
        },

        status: true,
        studentId: true,
        summaryAudience: true,
        summaryTopic: true,
        timestamp: true,
        urId: true,
        writing_style: true,
        writingStyleExp: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: QualsWriting })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async qualsWriting(
    @common.Param() params: QualsWritingWhereUniqueInput
  ): Promise<QualsWriting | null> {
    const result = await this.service.qualsWriting({
      where: params,
      select: {
        engaging_reader: true,
        engagingReaderExp: true,
        id: true,
        organization: true,
        organizationExp: true,
        overall: true,
        overallExp: true,

        qualsCommittee: {
          select: {
            id: true,
          },
        },

        status: true,
        studentId: true,
        summaryAudience: true,
        summaryTopic: true,
        timestamp: true,
        urId: true,
        writing_style: true,
        writingStyleExp: true,
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
  @swagger.ApiOkResponse({ type: QualsWriting })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateQualsWriting(
    @common.Param() params: QualsWritingWhereUniqueInput,
    @common.Body() data: QualsWritingUpdateInput
  ): Promise<QualsWriting | null> {
    try {
      return await this.service.updateQualsWriting({
        where: params,
        data: {
          ...data,

          qualsCommittee: data.qualsCommittee
            ? {
                connect: data.qualsCommittee,
              }
            : undefined,
        },
        select: {
          engaging_reader: true,
          engagingReaderExp: true,
          id: true,
          organization: true,
          organizationExp: true,
          overall: true,
          overallExp: true,

          qualsCommittee: {
            select: {
              id: true,
            },
          },

          status: true,
          studentId: true,
          summaryAudience: true,
          summaryTopic: true,
          timestamp: true,
          urId: true,
          writing_style: true,
          writingStyleExp: true,
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
  @swagger.ApiOkResponse({ type: QualsWriting })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteQualsWriting(
    @common.Param() params: QualsWritingWhereUniqueInput
  ): Promise<QualsWriting | null> {
    try {
      return await this.service.deleteQualsWriting({
        where: params,
        select: {
          engaging_reader: true,
          engagingReaderExp: true,
          id: true,
          organization: true,
          organizationExp: true,
          overall: true,
          overallExp: true,

          qualsCommittee: {
            select: {
              id: true,
            },
          },

          status: true,
          studentId: true,
          summaryAudience: true,
          summaryTopic: true,
          timestamp: true,
          urId: true,
          writing_style: true,
          writingStyleExp: true,
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

  @common.Get("/:id/qualsWritingAspect")
  @ApiNestedQuery(QualsWritingAspectFindManyArgs)
  async findQualsWritingAspect(
    @common.Req() request: Request,
    @common.Param() params: QualsWritingWhereUniqueInput
  ): Promise<QualsWritingAspect[]> {
    const query = plainToClass(QualsWritingAspectFindManyArgs, request.query);
    const results = await this.service.findQualsWritingAspect(params.id, {
      ...query,
      select: {
        id: true,

        qualsWriting: {
          select: {
            id: true,
          },
        },

        text: true,
        type: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/qualsWritingAspect")
  async connectQualsWritingAspect(
    @common.Param() params: QualsWritingWhereUniqueInput,
    @common.Body() body: QualsWritingAspectWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      qualsWritingAspect: {
        connect: body,
      },
    };
    await this.service.updateQualsWriting({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/qualsWritingAspect")
  async updateQualsWritingAspect(
    @common.Param() params: QualsWritingWhereUniqueInput,
    @common.Body() body: QualsWritingAspectWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      qualsWritingAspect: {
        set: body,
      },
    };
    await this.service.updateQualsWriting({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/qualsWritingAspect")
  async disconnectQualsWritingAspect(
    @common.Param() params: QualsWritingWhereUniqueInput,
    @common.Body() body: QualsWritingAspectWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      qualsWritingAspect: {
        disconnect: body,
      },
    };
    await this.service.updateQualsWriting({
      where: params,
      data,
      select: { id: true },
    });
  }
}
