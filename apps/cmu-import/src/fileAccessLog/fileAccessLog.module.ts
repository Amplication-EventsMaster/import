import { Module } from "@nestjs/common";
import { FileAccessLogModuleBase } from "./base/fileAccessLog.module.base";
import { FileAccessLogService } from "./fileAccessLog.service";
import { FileAccessLogController } from "./fileAccessLog.controller";
import { FileAccessLogResolver } from "./fileAccessLog.resolver";

@Module({
  imports: [FileAccessLogModuleBase],
  controllers: [FileAccessLogController],
  providers: [FileAccessLogService, FileAccessLogResolver],
  exports: [FileAccessLogService],
})
export class FileAccessLogModule {}
