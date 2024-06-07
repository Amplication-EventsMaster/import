import * as graphql from "@nestjs/graphql";
import { FileAccessLogResolverBase } from "./base/fileAccessLog.resolver.base";
import { FileAccessLog } from "./base/FileAccessLog";
import { FileAccessLogService } from "./fileAccessLog.service";

@graphql.Resolver(() => FileAccessLog)
export class FileAccessLogResolver extends FileAccessLogResolverBase {
  constructor(protected readonly service: FileAccessLogService) {
    super(service);
  }
}
