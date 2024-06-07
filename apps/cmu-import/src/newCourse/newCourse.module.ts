import { Module } from "@nestjs/common";
import { NewCourseModuleBase } from "./base/newCourse.module.base";
import { NewCourseService } from "./newCourse.service";
import { NewCourseController } from "./newCourse.controller";
import { NewCourseResolver } from "./newCourse.resolver";

@Module({
  imports: [NewCourseModuleBase],
  controllers: [NewCourseController],
  providers: [NewCourseService, NewCourseResolver],
  exports: [NewCourseService],
})
export class NewCourseModule {}
