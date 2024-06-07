import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SemesterDateOverrideService } from "./semesterDateOverride.service";
import { SemesterDateOverrideControllerBase } from "./base/semesterDateOverride.controller.base";

@swagger.ApiTags("semesterDateOverrides")
@common.Controller("semesterDateOverrides")
export class SemesterDateOverrideController extends SemesterDateOverrideControllerBase {
  constructor(protected readonly service: SemesterDateOverrideService) {
    super(service);
  }
}
