import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QualsResearchForOtherStudentService } from "./qualsResearchForOtherStudent.service";
import { QualsResearchForOtherStudentControllerBase } from "./base/qualsResearchForOtherStudent.controller.base";

@swagger.ApiTags("qualsResearchForOtherStudents")
@common.Controller("qualsResearchForOtherStudents")
export class QualsResearchForOtherStudentController extends QualsResearchForOtherStudentControllerBase {
  constructor(protected readonly service: QualsResearchForOtherStudentService) {
    super(service);
  }
}
