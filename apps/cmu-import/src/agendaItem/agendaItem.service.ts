import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AgendaItemServiceBase } from "./base/agendaItem.service.base";

@Injectable()
export class AgendaItemService extends AgendaItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
