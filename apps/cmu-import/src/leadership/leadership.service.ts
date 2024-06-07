import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LeadershipServiceBase } from "./base/leadership.service.base";

@Injectable()
export class LeadershipService extends LeadershipServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
