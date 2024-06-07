import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StudentSkillServiceBase } from "./base/studentSkill.service.base";

@Injectable()
export class StudentSkillService extends StudentSkillServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
