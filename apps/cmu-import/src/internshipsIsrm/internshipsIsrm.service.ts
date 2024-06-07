import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InternshipsIsrmServiceBase } from "./base/internshipsIsrm.service.base";

@Injectable()
export class InternshipsIsrmService extends InternshipsIsrmServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
