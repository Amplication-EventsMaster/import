import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PresentationServiceBase } from "./base/presentation.service.base";

@Injectable()
export class PresentationService extends PresentationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
