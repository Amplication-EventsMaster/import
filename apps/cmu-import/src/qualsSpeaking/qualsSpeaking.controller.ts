import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QualsSpeakingService } from "./qualsSpeaking.service";
import { QualsSpeakingControllerBase } from "./base/qualsSpeaking.controller.base";

@swagger.ApiTags("qualsSpeakings")
@common.Controller("qualsSpeakings")
export class QualsSpeakingController extends QualsSpeakingControllerBase {
  constructor(protected readonly service: QualsSpeakingService) {
    super(service);
  }
}
