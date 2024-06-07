import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReviewPeriodReferenceServiceBase } from "./base/reviewPeriodReference.service.base";

@Injectable()
export class ReviewPeriodReferenceService extends ReviewPeriodReferenceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
