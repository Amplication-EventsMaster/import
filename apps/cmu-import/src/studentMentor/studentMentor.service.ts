import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StudentMentorServiceBase } from "./base/studentMentor.service.base";

@Injectable()
export class StudentMentorService extends StudentMentorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
