import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmploymentServiceBase } from "./base/employment.service.base";

@Injectable()
export class EmploymentService extends EmploymentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
