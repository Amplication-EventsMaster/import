import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QualsWritingAspectService } from "./qualsWritingAspect.service";
import { QualsWritingAspectControllerBase } from "./base/qualsWritingAspect.controller.base";

@swagger.ApiTags("qualsWritingAspects")
@common.Controller("qualsWritingAspects")
export class QualsWritingAspectController extends QualsWritingAspectControllerBase {
  constructor(protected readonly service: QualsWritingAspectService) {
    super(service);
  }
}
