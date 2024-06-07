import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AwardServiceBase } from "./base/award.service.base";

@Injectable()
export class AwardService extends AwardServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
