import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StudentResidencyServiceBase } from "./base/studentResidency.service.base";

@Injectable()
export class StudentResidencyService extends StudentResidencyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
