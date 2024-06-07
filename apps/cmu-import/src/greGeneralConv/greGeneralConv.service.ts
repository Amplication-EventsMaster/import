import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GreGeneralConvServiceBase } from "./base/greGeneralConv.service.base";

@Injectable()
export class GreGeneralConvService extends GreGeneralConvServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
