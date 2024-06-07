import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QualsWritingAspectServiceBase } from "./base/qualsWritingAspect.service.base";

@Injectable()
export class QualsWritingAspectService extends QualsWritingAspectServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
