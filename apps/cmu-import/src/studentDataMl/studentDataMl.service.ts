import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StudentDataMlServiceBase } from "./base/studentDataMl.service.base";

@Injectable()
export class StudentDataMlService extends StudentDataMlServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
