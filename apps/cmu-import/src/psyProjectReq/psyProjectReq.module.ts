import { Module } from "@nestjs/common";
import { PsyProjectReqModuleBase } from "./base/psyProjectReq.module.base";
import { PsyProjectReqService } from "./psyProjectReq.service";
import { PsyProjectReqController } from "./psyProjectReq.controller";
import { PsyProjectReqResolver } from "./psyProjectReq.resolver";

@Module({
  imports: [PsyProjectReqModuleBase],
  controllers: [PsyProjectReqController],
  providers: [PsyProjectReqService, PsyProjectReqResolver],
  exports: [PsyProjectReqService],
})
export class PsyProjectReqModule {}
