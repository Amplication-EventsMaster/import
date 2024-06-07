import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IccServiceBase } from "./base/icc.service.base";

@Injectable()
export class IccService extends IccServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
