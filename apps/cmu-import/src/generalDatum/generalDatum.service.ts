import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GeneralDatumServiceBase } from "./base/generalDatum.service.base";

@Injectable()
export class GeneralDatumService extends GeneralDatumServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
