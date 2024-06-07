import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DocumentTemplatePartServiceBase } from "./base/documentTemplatePart.service.base";

@Injectable()
export class DocumentTemplatePartService extends DocumentTemplatePartServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
