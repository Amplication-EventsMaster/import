import { Module } from "@nestjs/common";
import { StudentDataIniModuleBase } from "./base/studentDataIni.module.base";
import { StudentDataIniService } from "./studentDataIni.service";
import { StudentDataIniController } from "./studentDataIni.controller";
import { StudentDataIniResolver } from "./studentDataIni.resolver";

@Module({
  imports: [StudentDataIniModuleBase],
  controllers: [StudentDataIniController],
  providers: [StudentDataIniService, StudentDataIniResolver],
  exports: [StudentDataIniService],
})
export class StudentDataIniModule {}
