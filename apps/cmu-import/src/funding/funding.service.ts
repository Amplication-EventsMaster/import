import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FundingServiceBase } from "./base/funding.service.base";

@Injectable()
export class FundingService extends FundingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
