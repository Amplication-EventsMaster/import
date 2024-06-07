import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UsersOverrideServiceBase } from "./base/usersOverride.service.base";

@Injectable()
export class UsersOverrideService extends UsersOverrideServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
