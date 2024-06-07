import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RawDatumServiceBase } from "./base/rawDatum.service.base";

@Injectable()
export class RawDatumService extends RawDatumServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
