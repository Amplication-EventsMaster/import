import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ApplywebStudentMigrationDatumServiceBase } from "./base/applywebStudentMigrationDatum.service.base";

@Injectable()
export class ApplywebStudentMigrationDatumService extends ApplywebStudentMigrationDatumServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
