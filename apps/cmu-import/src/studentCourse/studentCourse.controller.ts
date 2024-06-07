import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StudentCourseService } from "./studentCourse.service";
import { StudentCourseControllerBase } from "./base/studentCourse.controller.base";

@swagger.ApiTags("studentCourses")
@common.Controller("studentCourses")
export class StudentCourseController extends StudentCourseControllerBase {
  constructor(protected readonly service: StudentCourseService) {
    super(service);
  }
}
