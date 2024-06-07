import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ReportColumnService } from "./reportColumn.service";
import { ReportColumnControllerBase } from "./base/reportColumn.controller.base";

@swagger.ApiTags("reportColumns")
@common.Controller("reportColumns")
export class ReportColumnController extends ReportColumnControllerBase {
  constructor(protected readonly service: ReportColumnService) {
    super(service);
  }
}
