import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SemesterDateOverrideServiceBase } from "./base/semesterDateOverride.service.base";

@Injectable()
export class SemesterDateOverrideService extends SemesterDateOverrideServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
