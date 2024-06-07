import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReportColumnServiceBase } from "./base/reportColumn.service.base";

@Injectable()
export class ReportColumnService extends ReportColumnServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
