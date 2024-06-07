import { Module } from "@nestjs/common";
import { StudentSkillModuleBase } from "./base/studentSkill.module.base";
import { StudentSkillService } from "./studentSkill.service";
import { StudentSkillController } from "./studentSkill.controller";
import { StudentSkillResolver } from "./studentSkill.resolver";

@Module({
  imports: [StudentSkillModuleBase],
  controllers: [StudentSkillController],
  providers: [StudentSkillService, StudentSkillResolver],
  exports: [StudentSkillService],
})
export class StudentSkillModule {}
