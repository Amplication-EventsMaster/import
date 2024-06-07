import { Module } from "@nestjs/common";
import { StudentDocumentPartModuleBase } from "./base/studentDocumentPart.module.base";
import { StudentDocumentPartService } from "./studentDocumentPart.service";
import { StudentDocumentPartController } from "./studentDocumentPart.controller";
import { StudentDocumentPartResolver } from "./studentDocumentPart.resolver";

@Module({
  imports: [StudentDocumentPartModuleBase],
  controllers: [StudentDocumentPartController],
  providers: [StudentDocumentPartService, StudentDocumentPartResolver],
  exports: [StudentDocumentPartService],
})
export class StudentDocumentPartModule {}
