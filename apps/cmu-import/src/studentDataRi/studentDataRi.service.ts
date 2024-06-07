import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StudentDataRiServiceBase } from "./base/studentDataRi.service.base";

@Injectable()
export class StudentDataRiService extends StudentDataRiServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
