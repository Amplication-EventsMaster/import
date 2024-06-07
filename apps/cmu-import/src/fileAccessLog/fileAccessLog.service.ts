import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FileAccessLogServiceBase } from "./base/fileAccessLog.service.base";

@Injectable()
export class FileAccessLogService extends FileAccessLogServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
