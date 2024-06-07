import { Module } from "@nestjs/common";
import { StudentFileModuleBase } from "./base/studentFile.module.base";
import { StudentFileService } from "./studentFile.service";
import { StudentFileController } from "./studentFile.controller";
import { StudentFileResolver } from "./studentFile.resolver";

@Module({
  imports: [StudentFileModuleBase],
  controllers: [StudentFileController],
  providers: [StudentFileService, StudentFileResolver],
  exports: [StudentFileService],
})
export class StudentFileModule {}
