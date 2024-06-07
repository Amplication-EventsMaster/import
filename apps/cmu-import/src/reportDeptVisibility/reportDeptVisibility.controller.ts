import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ReportDeptVisibilityService } from "./reportDeptVisibility.service";
import { ReportDeptVisibilityControllerBase } from "./base/reportDeptVisibility.controller.base";

@swagger.ApiTags("reportDeptVisibilities")
@common.Controller("reportDeptVisibilities")
export class ReportDeptVisibilityController extends ReportDeptVisibilityControllerBase {
  constructor(protected readonly service: ReportDeptVisibilityService) {
    super(service);
  }
}
