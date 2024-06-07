import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MeetingAgendumServiceBase } from "./base/meetingAgendum.service.base";

@Injectable()
export class MeetingAgendumService extends MeetingAgendumServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
