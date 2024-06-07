import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AgendaServiceBase } from "./base/agenda.service.base";

@Injectable()
export class AgendaService extends AgendaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
