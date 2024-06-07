import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MeetingParameterServiceBase } from "./base/meetingParameter.service.base";

@Injectable()
export class MeetingParameterService extends MeetingParameterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
