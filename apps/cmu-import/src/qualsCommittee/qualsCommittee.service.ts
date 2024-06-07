import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QualsCommitteeServiceBase } from "./base/qualsCommittee.service.base";

@Injectable()
export class QualsCommitteeService extends QualsCommitteeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
