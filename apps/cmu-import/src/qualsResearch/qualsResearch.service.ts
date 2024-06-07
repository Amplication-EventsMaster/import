import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QualsResearchServiceBase } from "./base/qualsResearch.service.base";

@Injectable()
export class QualsResearchService extends QualsResearchServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
