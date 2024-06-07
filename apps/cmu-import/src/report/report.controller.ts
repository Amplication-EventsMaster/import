import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ReportService } from "./report.service";
import { ReportControllerBase } from "./base/report.controller.base";

@swagger.ApiTags("reports")
@common.Controller("reports")
export class ReportController extends ReportControllerBase {
  constructor(protected readonly service: ReportService) {
    super(service);
  }
}
