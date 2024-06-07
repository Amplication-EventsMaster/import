import { Module } from "@nestjs/common";
import { ProgramStatusModuleBase } from "./base/programStatus.module.base";
import { ProgramStatusService } from "./programStatus.service";
import { ProgramStatusController } from "./programStatus.controller";
import { ProgramStatusResolver } from "./programStatus.resolver";

@Module({
  imports: [ProgramStatusModuleBase],
  controllers: [ProgramStatusController],
  providers: [ProgramStatusService, ProgramStatusResolver],
  exports: [ProgramStatusService],
})
export class ProgramStatusModule {}
