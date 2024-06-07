import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PsyProjectReqServiceBase } from "./base/psyProjectReq.service.base";

@Injectable()
export class PsyProjectReqService extends PsyProjectReqServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
