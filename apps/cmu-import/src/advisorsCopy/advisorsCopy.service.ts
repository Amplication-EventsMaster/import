import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AdvisorsCopyServiceBase } from "./base/advisorsCopy.service.base";

@Injectable()
export class AdvisorsCopyService extends AdvisorsCopyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
