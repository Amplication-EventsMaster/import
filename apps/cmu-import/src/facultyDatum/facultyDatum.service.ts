import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FacultyDatumServiceBase } from "./base/facultyDatum.service.base";

@Injectable()
export class FacultyDatumService extends FacultyDatumServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
