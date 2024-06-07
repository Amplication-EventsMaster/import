import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserRoleProgramServiceBase } from "./base/userRoleProgram.service.base";

@Injectable()
export class UserRoleProgramService extends UserRoleProgramServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
