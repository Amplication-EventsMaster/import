import { Module } from "@nestjs/common";
import { StudentCourseModuleBase } from "./base/studentCourse.module.base";
import { StudentCourseService } from "./studentCourse.service";
import { StudentCourseController } from "./studentCourse.controller";
import { StudentCourseResolver } from "./studentCourse.resolver";

@Module({
  imports: [StudentCourseModuleBase],
  controllers: [StudentCourseController],
  providers: [StudentCourseService, StudentCourseResolver],
  exports: [StudentCourseService],
})
export class StudentCourseModule {}
