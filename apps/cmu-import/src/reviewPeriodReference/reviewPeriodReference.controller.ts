import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ReviewPeriodReferenceService } from "./reviewPeriodReference.service";
import { ReviewPeriodReferenceControllerBase } from "./base/reviewPeriodReference.controller.base";

@swagger.ApiTags("reviewPeriodReferences")
@common.Controller("reviewPeriodReferences")
export class ReviewPeriodReferenceController extends ReviewPeriodReferenceControllerBase {
  constructor(protected readonly service: ReviewPeriodReferenceService) {
    super(service);
  }
}
