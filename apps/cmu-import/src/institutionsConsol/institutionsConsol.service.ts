import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InstitutionsConsolServiceBase } from "./base/institutionsConsol.service.base";

@Injectable()
export class InstitutionsConsolService extends InstitutionsConsolServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
