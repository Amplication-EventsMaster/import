import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FileAccessLogService } from "./fileAccessLog.service";
import { FileAccessLogControllerBase } from "./base/fileAccessLog.controller.base";

@swagger.ApiTags("fileAccessLogs")
@common.Controller("fileAccessLogs")
export class FileAccessLogController extends FileAccessLogControllerBase {
  constructor(protected readonly service: FileAccessLogService) {
    super(service);
  }
}
