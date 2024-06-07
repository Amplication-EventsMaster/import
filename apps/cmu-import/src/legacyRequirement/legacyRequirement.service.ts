import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LegacyRequirementServiceBase } from "./base/legacyRequirement.service.base";

@Injectable()
export class LegacyRequirementService extends LegacyRequirementServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
