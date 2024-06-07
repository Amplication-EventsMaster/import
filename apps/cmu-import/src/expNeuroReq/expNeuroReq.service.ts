import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ExpNeuroReqServiceBase } from "./base/expNeuroReq.service.base";

@Injectable()
export class ExpNeuroReqService extends ExpNeuroReqServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
