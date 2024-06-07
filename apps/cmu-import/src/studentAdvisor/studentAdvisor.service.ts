import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StudentAdvisorServiceBase } from "./base/studentAdvisor.service.base";

@Injectable()
export class StudentAdvisorService extends StudentAdvisorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
