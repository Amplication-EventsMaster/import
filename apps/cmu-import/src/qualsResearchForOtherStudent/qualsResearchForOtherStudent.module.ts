import { Module } from "@nestjs/common";
import { QualsResearchForOtherStudentModuleBase } from "./base/qualsResearchForOtherStudent.module.base";
import { QualsResearchForOtherStudentService } from "./qualsResearchForOtherStudent.service";
import { QualsResearchForOtherStudentController } from "./qualsResearchForOtherStudent.controller";
import { QualsResearchForOtherStudentResolver } from "./qualsResearchForOtherStudent.resolver";

@Module({
  imports: [QualsResearchForOtherStudentModuleBase],
  controllers: [QualsResearchForOtherStudentController],
  providers: [
    QualsResearchForOtherStudentService,
    QualsResearchForOtherStudentResolver,
  ],
  exports: [QualsResearchForOtherStudentService],
})
export class QualsResearchForOtherStudentModule {}
