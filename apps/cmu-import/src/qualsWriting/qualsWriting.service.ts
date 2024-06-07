import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QualsWritingServiceBase } from "./base/qualsWriting.service.base";

@Injectable()
export class QualsWritingService extends QualsWritingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
