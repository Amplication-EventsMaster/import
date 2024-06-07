import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { NewCourseDepartmentService } from "./newCourseDepartment.service";
import { NewCourseDepartmentControllerBase } from "./base/newCourseDepartment.controller.base";

@swagger.ApiTags("newCourseDepartments")
@common.Controller("newCourseDepartments")
export class NewCourseDepartmentController extends NewCourseDepartmentControllerBase {
  constructor(protected readonly service: NewCourseDepartmentService) {
    super(service);
  }
}
