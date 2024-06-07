import { Module } from "@nestjs/common";
import { DepartmentMeetingModuleBase } from "./base/departmentMeeting.module.base";
import { DepartmentMeetingService } from "./departmentMeeting.service";
import { DepartmentMeetingController } from "./departmentMeeting.controller";
import { DepartmentMeetingResolver } from "./departmentMeeting.resolver";

@Module({
  imports: [DepartmentMeetingModuleBase],
  controllers: [DepartmentMeetingController],
  providers: [DepartmentMeetingService, DepartmentMeetingResolver],
  exports: [DepartmentMeetingService],
})
export class DepartmentMeetingModule {}
