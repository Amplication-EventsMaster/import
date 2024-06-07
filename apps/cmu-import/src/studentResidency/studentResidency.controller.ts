import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StudentResidencyService } from "./studentResidency.service";
import { StudentResidencyControllerBase } from "./base/studentResidency.controller.base";

@swagger.ApiTags("studentResidencies")
@common.Controller("studentResidencies")
export class StudentResidencyController extends StudentResidencyControllerBase {
  constructor(protected readonly service: StudentResidencyService) {
    super(service);
  }
}
