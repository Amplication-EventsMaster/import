import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ResponsibleConductOfResearchServiceBase } from "./base/responsibleConductOfResearch.service.base";

@Injectable()
export class ResponsibleConductOfResearchService extends ResponsibleConductOfResearchServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
