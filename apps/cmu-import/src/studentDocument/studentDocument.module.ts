import { Module } from "@nestjs/common";
import { StudentDocumentModuleBase } from "./base/studentDocument.module.base";
import { StudentDocumentService } from "./studentDocument.service";
import { StudentDocumentController } from "./studentDocument.controller";
import { StudentDocumentResolver } from "./studentDocument.resolver";

@Module({
  imports: [StudentDocumentModuleBase],
  controllers: [StudentDocumentController],
  providers: [StudentDocumentService, StudentDocumentResolver],
  exports: [StudentDocumentService],
})
export class StudentDocumentModule {}
