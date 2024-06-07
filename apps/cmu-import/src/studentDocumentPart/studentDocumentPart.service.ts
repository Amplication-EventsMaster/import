import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StudentDocumentPartServiceBase } from "./base/studentDocumentPart.service.base";

@Injectable()
export class StudentDocumentPartService extends StudentDocumentPartServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
