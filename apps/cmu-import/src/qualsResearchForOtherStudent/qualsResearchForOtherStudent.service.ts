import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QualsResearchForOtherStudentServiceBase } from "./base/qualsResearchForOtherStudent.service.base";

@Injectable()
export class QualsResearchForOtherStudentService extends QualsResearchForOtherStudentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
