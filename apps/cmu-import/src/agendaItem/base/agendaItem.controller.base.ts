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
import { AgendaItemService } from "../agendaItem.service";
import { AgendaItemCreateInput } from "./AgendaItemCreateInput";
import { AgendaItem } from "./AgendaItem";
import { AgendaItemFindManyArgs } from "./AgendaItemFindManyArgs";
import { AgendaItemWhereUniqueInput } from "./AgendaItemWhereUniqueInput";
import { AgendaItemUpdateInput } from "./AgendaItemUpdateInput";

export class AgendaItemControllerBase {
  constructor(protected readonly service: AgendaItemService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: AgendaItem })
  async createAgendaItem(
    @common.Body() data: AgendaItemCreateInput
  ): Promise<AgendaItem> {
    return await this.service.createAgendaItem({
      data: data,
      select: {
        agendaId: true,
        id: true,
        meetingId: true,
        order: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [AgendaItem] })
  @ApiNestedQuery(AgendaItemFindManyArgs)
  async agendaItems(@common.Req() request: Request): Promise<AgendaItem[]> {
    const args = plainToClass(AgendaItemFindManyArgs, request.query);
    return this.service.agendaItems({
      ...args,
      select: {
        agendaId: true,
        id: true,
        meetingId: true,
        order: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: AgendaItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async agendaItem(
    @common.Param() params: AgendaItemWhereUniqueInput
  ): Promise<AgendaItem | null> {
    const result = await this.service.agendaItem({
      where: params,
      select: {
        agendaId: true,
        id: true,
        meetingId: true,
        order: true,
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
  @swagger.ApiOkResponse({ type: AgendaItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateAgendaItem(
    @common.Param() params: AgendaItemWhereUniqueInput,
    @common.Body() data: AgendaItemUpdateInput
  ): Promise<AgendaItem | null> {
    try {
      return await this.service.updateAgendaItem({
        where: params,
        data: data,
        select: {
          agendaId: true,
          id: true,
          meetingId: true,
          order: true,
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
  @swagger.ApiOkResponse({ type: AgendaItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteAgendaItem(
    @common.Param() params: AgendaItemWhereUniqueInput
  ): Promise<AgendaItem | null> {
    try {
      return await this.service.deleteAgendaItem({
        where: params,
        select: {
          agendaId: true,
          id: true,
          meetingId: true,
          order: true,
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
