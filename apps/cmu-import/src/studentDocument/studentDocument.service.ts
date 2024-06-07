import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StudentDocumentServiceBase } from "./base/studentDocument.service.base";

@Injectable()
export class StudentDocumentService extends StudentDocumentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
