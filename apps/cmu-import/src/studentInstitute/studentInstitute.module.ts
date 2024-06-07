import { Module } from "@nestjs/common";
import { StudentInstituteModuleBase } from "./base/studentInstitute.module.base";
import { StudentInstituteService } from "./studentInstitute.service";
import { StudentInstituteController } from "./studentInstitute.controller";
import { StudentInstituteResolver } from "./studentInstitute.resolver";

@Module({
  imports: [StudentInstituteModuleBase],
  controllers: [StudentInstituteController],
  providers: [StudentInstituteService, StudentInstituteResolver],
  exports: [StudentInstituteService],
})
export class StudentInstituteModule {}
