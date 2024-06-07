import { Module } from "@nestjs/common";
import { StudentAdvisorModuleBase } from "./base/studentAdvisor.module.base";
import { StudentAdvisorService } from "./studentAdvisor.service";
import { StudentAdvisorController } from "./studentAdvisor.controller";
import { StudentAdvisorResolver } from "./studentAdvisor.resolver";

@Module({
  imports: [StudentAdvisorModuleBase],
  controllers: [StudentAdvisorController],
  providers: [StudentAdvisorService, StudentAdvisorResolver],
  exports: [StudentAdvisorService],
})
export class StudentAdvisorModule {}
