import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ItaServiceBase } from "./base/ita.service.base";

@Injectable()
export class ItaService extends ItaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
