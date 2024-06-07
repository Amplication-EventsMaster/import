import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ScheduledMeetingServiceBase } from "./base/scheduledMeeting.service.base";

@Injectable()
export class ScheduledMeetingService extends ScheduledMeetingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
