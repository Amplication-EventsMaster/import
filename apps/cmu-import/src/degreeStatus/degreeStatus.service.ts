import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DegreeStatusServiceBase } from "./base/degreeStatus.service.base";

@Injectable()
export class DegreeStatusService extends DegreeStatusServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
