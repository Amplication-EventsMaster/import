import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SemesterReferenceService } from "./semesterReference.service";
import { SemesterReferenceControllerBase } from "./base/semesterReference.controller.base";

@swagger.ApiTags("semesterReferences")
@common.Controller("semesterReferences")
export class SemesterReferenceController extends SemesterReferenceControllerBase {
  constructor(protected readonly service: SemesterReferenceService) {
    super(service);
  }
}
