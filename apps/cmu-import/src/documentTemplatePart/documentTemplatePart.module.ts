import { Module } from "@nestjs/common";
import { DocumentTemplatePartModuleBase } from "./base/documentTemplatePart.module.base";
import { DocumentTemplatePartService } from "./documentTemplatePart.service";
import { DocumentTemplatePartController } from "./documentTemplatePart.controller";
import { DocumentTemplatePartResolver } from "./documentTemplatePart.resolver";

@Module({
  imports: [DocumentTemplatePartModuleBase],
  controllers: [DocumentTemplatePartController],
  providers: [DocumentTemplatePartService, DocumentTemplatePartResolver],
  exports: [DocumentTemplatePartService],
})
export class DocumentTemplatePartModule {}
