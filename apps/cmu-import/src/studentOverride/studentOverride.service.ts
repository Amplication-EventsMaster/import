import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StudentOverrideServiceBase } from "./base/studentOverride.service.base";

@Injectable()
export class StudentOverrideService extends StudentOverrideServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
