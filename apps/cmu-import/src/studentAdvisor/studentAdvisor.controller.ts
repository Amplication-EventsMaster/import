import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StudentAdvisorService } from "./studentAdvisor.service";
import { StudentAdvisorControllerBase } from "./base/studentAdvisor.controller.base";

@swagger.ApiTags("studentAdvisors")
@common.Controller("studentAdvisors")
export class StudentAdvisorController extends StudentAdvisorControllerBase {
  constructor(protected readonly service: StudentAdvisorService) {
    super(service);
  }
}
