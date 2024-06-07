import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StudentCommitteeMeetingServiceBase } from "./base/studentCommitteeMeeting.service.base";

@Injectable()
export class StudentCommitteeMeetingService extends StudentCommitteeMeetingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
