import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SemesterReferenceServiceBase } from "./base/semesterReference.service.base";

@Injectable()
export class SemesterReferenceService extends SemesterReferenceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
