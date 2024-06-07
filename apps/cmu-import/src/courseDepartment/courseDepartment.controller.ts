import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CourseDepartmentService } from "./courseDepartment.service";
import { CourseDepartmentControllerBase } from "./base/courseDepartment.controller.base";

@swagger.ApiTags("courseDepartments")
@common.Controller("courseDepartments")
export class CourseDepartmentController extends CourseDepartmentControllerBase {
  constructor(protected readonly service: CourseDepartmentService) {
    super(service);
  }
}
