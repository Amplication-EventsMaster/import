import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserHostServiceBase } from "./base/userHost.service.base";

@Injectable()
export class UserHostService extends UserHostServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
