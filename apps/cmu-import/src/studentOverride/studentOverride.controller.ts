import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StudentOverrideService } from "./studentOverride.service";
import { StudentOverrideControllerBase } from "./base/studentOverride.controller.base";

@swagger.ApiTags("studentOverrides")
@common.Controller("studentOverrides")
export class StudentOverrideController extends StudentOverrideControllerBase {
  constructor(protected readonly service: StudentOverrideService) {
    super(service);
  }
}
