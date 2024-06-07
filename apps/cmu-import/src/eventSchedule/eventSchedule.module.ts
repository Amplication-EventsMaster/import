import { Module } from "@nestjs/common";
import { EventScheduleModuleBase } from "./base/eventSchedule.module.base";
import { EventScheduleService } from "./eventSchedule.service";
import { EventScheduleController } from "./eventSchedule.controller";
import { EventScheduleResolver } from "./eventSchedule.resolver";

@Module({
  imports: [EventScheduleModuleBase],
  controllers: [EventScheduleController],
  providers: [EventScheduleService, EventScheduleResolver],
  exports: [EventScheduleService],
})
export class EventScheduleModule {}
