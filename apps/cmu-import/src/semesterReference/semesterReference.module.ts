import { Module } from "@nestjs/common";
import { SemesterReferenceModuleBase } from "./base/semesterReference.module.base";
import { SemesterReferenceService } from "./semesterReference.service";
import { SemesterReferenceController } from "./semesterReference.controller";
import { SemesterReferenceResolver } from "./semesterReference.resolver";

@Module({
  imports: [SemesterReferenceModuleBase],
  controllers: [SemesterReferenceController],
  providers: [SemesterReferenceService, SemesterReferenceResolver],
  exports: [SemesterReferenceService],
})
export class SemesterReferenceModule {}
