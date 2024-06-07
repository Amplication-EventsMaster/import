import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StudentFileServiceBase } from "./base/studentFile.service.base";

@Injectable()
export class StudentFileService extends StudentFileServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
