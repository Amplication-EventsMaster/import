import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ApplywebApplicationServiceBase } from "./base/applywebApplication.service.base";

@Injectable()
export class ApplywebApplicationService extends ApplywebApplicationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
