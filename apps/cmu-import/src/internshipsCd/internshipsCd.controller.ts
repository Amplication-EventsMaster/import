import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InternshipsCdService } from "./internshipsCd.service";
import { InternshipsCdControllerBase } from "./base/internshipsCd.controller.base";

@swagger.ApiTags("internshipsCds")
@common.Controller("internshipsCds")
export class InternshipsCdController extends InternshipsCdControllerBase {
  constructor(protected readonly service: InternshipsCdService) {
    super(service);
  }
}
