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
import { QualsCommitteeService } from "../qualsCommittee.service";
import { QualsCommitteeCreateInput } from "./QualsCommitteeCreateInput";
import { QualsCommittee } from "./QualsCommittee";
import { QualsCommitteeFindManyArgs } from "./QualsCommitteeFindManyArgs";
import { QualsCommitteeWhereUniqueInput } from "./QualsCommitteeWhereUniqueInput";
import { QualsCommitteeUpdateInput } from "./QualsCommitteeUpdateInput";
import { QualsResearchFindManyArgs } from "../../qualsResearch/base/QualsResearchFindManyArgs";
import { QualsResearch } from "../../qualsResearch/base/QualsResearch";
import { QualsResearchWhereUniqueInput } from "../../qualsResearch/base/QualsResearchWhereUniqueInput";
import { QualsResearchForOtherStudentFindManyArgs } from "../../qualsResearchForOtherStudent/base/QualsResearchForOtherStudentFindManyArgs";
import { QualsResearchForOtherStudent } from "../../qualsResearchForOtherStudent/base/QualsResearchForOtherStudent";
import { QualsResearchForOtherStudentWhereUniqueInput } from "../../qualsResearchForOtherStudent/base/QualsResearchForOtherStudentWhereUniqueInput";
import { QualsWritingFindManyArgs } from "../../qualsWriting/base/QualsWritingFindManyArgs";
import { QualsWriting } from "../../qualsWriting/base/QualsWriting";
import { QualsWritingWhereUniqueInput } from "../../qualsWriting/base/QualsWritingWhereUniqueInput";

export class QualsCommitteeControllerBase {
  constructor(protected readonly service: QualsCommitteeService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: QualsCommittee })
  async createQualsCommittee(
    @common.Body() data: QualsCommitteeCreateInput
  ): Promise<QualsCommittee> {
    return await this.service.createQualsCommittee({
      data: {
        ...data,

        studentData: {
          connect: data.studentData,
        },
      },
      select: {
        id: true,
        memberType: true,
        overrideResearch: true,
        overrideSpeaking: true,
        overrideWriting: true,

        studentData: {
          select: {
            id: true,
          },
        },

        urId: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [QualsCommittee] })
  @ApiNestedQuery(QualsCommitteeFindManyArgs)
  async qualsCommittees(
    @common.Req() request: Request
  ): Promise<QualsCommittee[]> {
    const args = plainToClass(QualsCommitteeFindManyArgs, request.query);
    return this.service.qualsCommittees({
      ...args,
      select: {
        id: true,
        memberType: true,
        overrideResearch: true,
        overrideSpeaking: true,
        overrideWriting: true,

        studentData: {
          select: {
            id: true,
          },
        },

        urId: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: QualsCommittee })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async qualsCommittee(
    @common.Param() params: QualsCommitteeWhereUniqueInput
  ): Promise<QualsCommittee | null> {
    const result = await this.service.qualsCommittee({
      where: params,
      select: {
        id: true,
        memberType: true,
        overrideResearch: true,
        overrideSpeaking: true,
        overrideWriting: true,

        studentData: {
          select: {
            id: true,
          },
        },

        urId: true,
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
  @swagger.ApiOkResponse({ type: QualsCommittee })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateQualsCommittee(
    @common.Param() params: QualsCommitteeWhereUniqueInput,
    @common.Body() data: QualsCommitteeUpdateInput
  ): Promise<QualsCommittee | null> {
    try {
      return await this.service.updateQualsCommittee({
        where: params,
        data: {
          ...data,

          studentData: {
            connect: data.studentData,
          },
        },
        select: {
          id: true,
          memberType: true,
          overrideResearch: true,
          overrideSpeaking: true,
          overrideWriting: true,

          studentData: {
            select: {
              id: true,
            },
          },

          urId: true,
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
  @swagger.ApiOkResponse({ type: QualsCommittee })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteQualsCommittee(
    @common.Param() params: QualsCommitteeWhereUniqueInput
  ): Promise<QualsCommittee | null> {
    try {
      return await this.service.deleteQualsCommittee({
        where: params,
        select: {
          id: true,
          memberType: true,
          overrideResearch: true,
          overrideSpeaking: true,
          overrideWriting: true,

          studentData: {
            select: {
              id: true,
            },
          },

          urId: true,
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

  @common.Get("/:id/qualsResearch")
  @ApiNestedQuery(QualsResearchFindManyArgs)
  async findQualsResearch(
    @common.Req() request: Request,
    @common.Param() params: QualsCommitteeWhereUniqueInput
  ): Promise<QualsResearch[]> {
    const query = plainToClass(QualsResearchFindManyArgs, request.query);
    const results = await this.service.findQualsResearch(params.id, {
      ...query,
      select: {
        approach: true,
        approachExp: true,
        id: true,
        insight: true,
        insightExp: true,
        interpretation: true,
        interpretationExp: true,
        overall: true,
        overallExp: true,
        progress: true,

        qualsCommittee: {
          select: {
            id: true,
          },
        },

        status: true,
        studentId: true,
        summary: true,
        timestamp: true,
        understanding: true,
        understandingExp: true,
        urId: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/qualsResearch")
  async connectQualsResearch(
    @common.Param() params: QualsCommitteeWhereUniqueInput,
    @common.Body() body: QualsResearchWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      qualsResearch: {
        connect: body,
      },
    };
    await this.service.updateQualsCommittee({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/qualsResearch")
  async updateQualsResearch(
    @common.Param() params: QualsCommitteeWhereUniqueInput,
    @common.Body() body: QualsResearchWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      qualsResearch: {
        set: body,
      },
    };
    await this.service.updateQualsCommittee({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/qualsResearch")
  async disconnectQualsResearch(
    @common.Param() params: QualsCommitteeWhereUniqueInput,
    @common.Body() body: QualsResearchWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      qualsResearch: {
        disconnect: body,
      },
    };
    await this.service.updateQualsCommittee({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/qualsResearchForOtherStudent")
  @ApiNestedQuery(QualsResearchForOtherStudentFindManyArgs)
  async findQualsResearchForOtherStudent(
    @common.Req() request: Request,
    @common.Param() params: QualsCommitteeWhereUniqueInput
  ): Promise<QualsResearchForOtherStudent[]> {
    const query = plainToClass(
      QualsResearchForOtherStudentFindManyArgs,
      request.query
    );
    const results = await this.service.findQualsResearchForOtherStudent(
      params.id,
      {
        ...query,
        select: {
          approach: true,
          approachExp: true,
          id: true,
          insight: true,
          insightExp: true,
          interpretation: true,
          interpretationExp: true,
          overall: true,
          overallExp: true,
          progress: true,

          qualsCommittee: {
            select: {
              id: true,
            },
          },

          status: true,
          studentId: true,
          summary: true,
          timestamp: true,
          understanding: true,
          understandingExp: true,
          urId: true,
        },
      }
    );
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/qualsResearchForOtherStudent")
  async connectQualsResearchForOtherStudent(
    @common.Param() params: QualsCommitteeWhereUniqueInput,
    @common.Body() body: QualsResearchForOtherStudentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      qualsResearchForOtherStudent: {
        connect: body,
      },
    };
    await this.service.updateQualsCommittee({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/qualsResearchForOtherStudent")
  async updateQualsResearchForOtherStudent(
    @common.Param() params: QualsCommitteeWhereUniqueInput,
    @common.Body() body: QualsResearchForOtherStudentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      qualsResearchForOtherStudent: {
        set: body,
      },
    };
    await this.service.updateQualsCommittee({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/qualsResearchForOtherStudent")
  async disconnectQualsResearchForOtherStudent(
    @common.Param() params: QualsCommitteeWhereUniqueInput,
    @common.Body() body: QualsResearchForOtherStudentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      qualsResearchForOtherStudent: {
        disconnect: body,
      },
    };
    await this.service.updateQualsCommittee({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/qualsWriting")
  @ApiNestedQuery(QualsWritingFindManyArgs)
  async findQualsWriting(
    @common.Req() request: Request,
    @common.Param() params: QualsCommitteeWhereUniqueInput
  ): Promise<QualsWriting[]> {
    const query = plainToClass(QualsWritingFindManyArgs, request.query);
    const results = await this.service.findQualsWriting(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/qualsWriting")
  async connectQualsWriting(
    @common.Param() params: QualsCommitteeWhereUniqueInput,
    @common.Body() body: QualsWritingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      qualsWriting: {
        connect: body,
      },
    };
    await this.service.updateQualsCommittee({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/qualsWriting")
  async updateQualsWriting(
    @common.Param() params: QualsCommitteeWhereUniqueInput,
    @common.Body() body: QualsWritingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      qualsWriting: {
        set: body,
      },
    };
    await this.service.updateQualsCommittee({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/qualsWriting")
  async disconnectQualsWriting(
    @common.Param() params: QualsCommitteeWhereUniqueInput,
    @common.Body() body: QualsWritingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      qualsWriting: {
        disconnect: body,
      },
    };
    await this.service.updateQualsCommittee({
      where: params,
      data,
      select: { id: true },
    });
  }
}
