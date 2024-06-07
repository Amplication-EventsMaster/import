import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TeachingReqServiceBase } from "./base/teachingReq.service.base";

@Injectable()
export class TeachingReqService extends TeachingReqServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
