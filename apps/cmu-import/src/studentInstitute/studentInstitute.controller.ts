import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StudentInstituteService } from "./studentInstitute.service";
import { StudentInstituteControllerBase } from "./base/studentInstitute.controller.base";

@swagger.ApiTags("studentInstitutes")
@common.Controller("studentInstitutes")
export class StudentInstituteController extends StudentInstituteControllerBase {
  constructor(protected readonly service: StudentInstituteService) {
    super(service);
  }
}
