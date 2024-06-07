import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { NewCourseService } from "./newCourse.service";
import { NewCourseControllerBase } from "./base/newCourse.controller.base";

@swagger.ApiTags("newCourses")
@common.Controller("newCourses")
export class NewCourseController extends NewCourseControllerBase {
  constructor(protected readonly service: NewCourseService) {
    super(service);
  }
}
