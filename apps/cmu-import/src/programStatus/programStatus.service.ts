import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProgramStatusServiceBase } from "./base/programStatus.service.base";

@Injectable()
export class ProgramStatusService extends ProgramStatusServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
