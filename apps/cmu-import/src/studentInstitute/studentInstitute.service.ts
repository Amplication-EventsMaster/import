import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StudentInstituteServiceBase } from "./base/studentInstitute.service.base";

@Injectable()
export class StudentInstituteService extends StudentInstituteServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
