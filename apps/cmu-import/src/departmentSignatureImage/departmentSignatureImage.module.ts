import { Module } from "@nestjs/common";
import { DepartmentSignatureImageModuleBase } from "./base/departmentSignatureImage.module.base";
import { DepartmentSignatureImageService } from "./departmentSignatureImage.service";
import { DepartmentSignatureImageController } from "./departmentSignatureImage.controller";
import { DepartmentSignatureImageResolver } from "./departmentSignatureImage.resolver";

@Module({
  imports: [DepartmentSignatureImageModuleBase],
  controllers: [DepartmentSignatureImageController],
  providers: [
    DepartmentSignatureImageService,
    DepartmentSignatureImageResolver,
  ],
  exports: [DepartmentSignatureImageService],
})
export class DepartmentSignatureImageModule {}
