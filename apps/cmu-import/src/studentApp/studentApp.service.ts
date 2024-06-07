import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StudentAppServiceBase } from "./base/studentApp.service.base";

@Injectable()
export class StudentAppService extends StudentAppServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
