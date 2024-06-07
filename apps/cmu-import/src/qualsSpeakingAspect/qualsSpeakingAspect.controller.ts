import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QualsSpeakingAspectService } from "./qualsSpeakingAspect.service";
import { QualsSpeakingAspectControllerBase } from "./base/qualsSpeakingAspect.controller.base";

@swagger.ApiTags("qualsSpeakingAspects")
@common.Controller("qualsSpeakingAspects")
export class QualsSpeakingAspectController extends QualsSpeakingAspectControllerBase {
  constructor(protected readonly service: QualsSpeakingAspectService) {
    super(service);
  }
}
