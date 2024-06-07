import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AdvisorServiceBase } from "./base/advisor.service.base";

@Injectable()
export class AdvisorService extends AdvisorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
