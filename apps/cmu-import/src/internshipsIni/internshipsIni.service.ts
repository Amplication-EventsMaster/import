import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InternshipsIniServiceBase } from "./base/internshipsIni.service.base";

@Injectable()
export class InternshipsIniService extends InternshipsIniServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
