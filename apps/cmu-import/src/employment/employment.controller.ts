import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmploymentService } from "./employment.service";
import { EmploymentControllerBase } from "./base/employment.controller.base";

@swagger.ApiTags("employments")
@common.Controller("employments")
export class EmploymentController extends EmploymentControllerBase {
  constructor(protected readonly service: EmploymentService) {
    super(service);
  }
}
