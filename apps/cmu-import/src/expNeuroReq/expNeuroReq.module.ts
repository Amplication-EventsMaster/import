import { Module } from "@nestjs/common";
import { ExpNeuroReqModuleBase } from "./base/expNeuroReq.module.base";
import { ExpNeuroReqService } from "./expNeuroReq.service";
import { ExpNeuroReqController } from "./expNeuroReq.controller";
import { ExpNeuroReqResolver } from "./expNeuroReq.resolver";

@Module({
  imports: [ExpNeuroReqModuleBase],
  controllers: [ExpNeuroReqController],
  providers: [ExpNeuroReqService, ExpNeuroReqResolver],
  exports: [ExpNeuroReqService],
})
export class ExpNeuroReqModule {}
