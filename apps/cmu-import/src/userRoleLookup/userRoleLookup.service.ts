import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserRoleLookupServiceBase } from "./base/userRoleLookup.service.base";

@Injectable()
export class UserRoleLookupService extends UserRoleLookupServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
