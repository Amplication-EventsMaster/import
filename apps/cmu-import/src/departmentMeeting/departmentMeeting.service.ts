import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DepartmentMeetingServiceBase } from "./base/departmentMeeting.service.base";

@Injectable()
export class DepartmentMeetingService extends DepartmentMeetingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
