import { Module } from "@nestjs/common";
import { TeachingReqModuleBase } from "./base/teachingReq.module.base";
import { TeachingReqService } from "./teachingReq.service";
import { TeachingReqController } from "./teachingReq.controller";
import { TeachingReqResolver } from "./teachingReq.resolver";

@Module({
  imports: [TeachingReqModuleBase],
  controllers: [TeachingReqController],
  providers: [TeachingReqService, TeachingReqResolver],
  exports: [TeachingReqService],
})
export class TeachingReqModule {}
