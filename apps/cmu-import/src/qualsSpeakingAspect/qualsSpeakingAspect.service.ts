import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QualsSpeakingAspectServiceBase } from "./base/qualsSpeakingAspect.service.base";

@Injectable()
export class QualsSpeakingAspectService extends QualsSpeakingAspectServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
