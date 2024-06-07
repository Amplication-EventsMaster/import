import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StudentDataHciiServiceBase } from "./base/studentDataHcii.service.base";

@Injectable()
export class StudentDataHciiService extends StudentDataHciiServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
