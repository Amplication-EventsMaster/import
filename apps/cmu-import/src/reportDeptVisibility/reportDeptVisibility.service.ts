import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReportDeptVisibilityServiceBase } from "./base/reportDeptVisibility.service.base";

@Injectable()
export class ReportDeptVisibilityService extends ReportDeptVisibilityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
