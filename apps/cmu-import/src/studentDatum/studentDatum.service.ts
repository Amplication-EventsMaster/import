import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StudentDatumServiceBase } from "./base/studentDatum.service.base";

@Injectable()
export class StudentDatumService extends StudentDatumServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
