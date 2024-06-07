import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SemesterDateServiceBase } from "./base/semesterDate.service.base";

@Injectable()
export class SemesterDateService extends SemesterDateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
