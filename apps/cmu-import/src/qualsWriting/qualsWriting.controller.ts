import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QualsWritingService } from "./qualsWriting.service";
import { QualsWritingControllerBase } from "./base/qualsWriting.controller.base";

@swagger.ApiTags("qualsWritings")
@common.Controller("qualsWritings")
export class QualsWritingController extends QualsWritingControllerBase {
  constructor(protected readonly service: QualsWritingService) {
    super(service);
  }
}
