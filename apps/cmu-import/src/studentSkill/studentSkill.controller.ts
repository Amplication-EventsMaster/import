import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StudentSkillService } from "./studentSkill.service";
import { StudentSkillControllerBase } from "./base/studentSkill.controller.base";

@swagger.ApiTags("studentSkills")
@common.Controller("studentSkills")
export class StudentSkillController extends StudentSkillControllerBase {
  constructor(protected readonly service: StudentSkillService) {
    super(service);
  }
}
