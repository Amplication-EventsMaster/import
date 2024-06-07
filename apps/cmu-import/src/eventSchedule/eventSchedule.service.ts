import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EventScheduleServiceBase } from "./base/eventSchedule.service.base";

@Injectable()
export class EventScheduleService extends EventScheduleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
