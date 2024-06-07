import { Module } from "@nestjs/common";
import { DepartmentSignatureModuleBase } from "./base/departmentSignature.module.base";
import { DepartmentSignatureService } from "./departmentSignature.service";
import { DepartmentSignatureController } from "./departmentSignature.controller";
import { DepartmentSignatureResolver } from "./departmentSignature.resolver";

@Module({
  imports: [DepartmentSignatureModuleBase],
  controllers: [DepartmentSignatureController],
  providers: [DepartmentSignatureService, DepartmentSignatureResolver],
  exports: [DepartmentSignatureService],
})
export class DepartmentSignatureModule {}
