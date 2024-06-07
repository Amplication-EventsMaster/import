import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StudentMentorService } from "./studentMentor.service";
import { StudentMentorControllerBase } from "./base/studentMentor.controller.base";

@swagger.ApiTags("studentMentors")
@common.Controller("studentMentors")
export class StudentMentorController extends StudentMentorControllerBase {
  constructor(protected readonly service: StudentMentorService) {
    super(service);
  }
}
