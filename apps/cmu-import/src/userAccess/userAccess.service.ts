import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserAccessServiceBase } from "./base/userAccess.service.base";

@Injectable()
export class UserAccessService extends UserAccessServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
