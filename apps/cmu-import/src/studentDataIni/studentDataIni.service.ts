import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StudentDataIniServiceBase } from "./base/studentDataIni.service.base";

@Injectable()
export class StudentDataIniService extends StudentDataIniServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
