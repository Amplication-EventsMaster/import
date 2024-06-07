import { Module } from "@nestjs/common";
import { StudentMentorModuleBase } from "./base/studentMentor.module.base";
import { StudentMentorService } from "./studentMentor.service";
import { StudentMentorController } from "./studentMentor.controller";
import { StudentMentorResolver } from "./studentMentor.resolver";

@Module({
  imports: [StudentMentorModuleBase],
  controllers: [StudentMentorController],
  providers: [StudentMentorService, StudentMentorResolver],
  exports: [StudentMentorService],
})
export class StudentMentorModule {}
