import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QualsSpeakingServiceBase } from "./base/qualsSpeaking.service.base";

@Injectable()
export class QualsSpeakingService extends QualsSpeakingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
