import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StatementServiceBase } from "./base/statement.service.base";

@Injectable()
export class StatementService extends StatementServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
