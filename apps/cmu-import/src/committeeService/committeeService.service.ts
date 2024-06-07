import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CommitteeServiceServiceBase } from "./base/committeeService.service.base";

@Injectable()
export class CommitteeServiceService extends CommitteeServiceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
