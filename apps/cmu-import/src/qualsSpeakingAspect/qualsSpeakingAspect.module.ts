import { Module } from "@nestjs/common";
import { QualsSpeakingAspectModuleBase } from "./base/qualsSpeakingAspect.module.base";
import { QualsSpeakingAspectService } from "./qualsSpeakingAspect.service";
import { QualsSpeakingAspectController } from "./qualsSpeakingAspect.controller";
import { QualsSpeakingAspectResolver } from "./qualsSpeakingAspect.resolver";

@Module({
  imports: [QualsSpeakingAspectModuleBase],
  controllers: [QualsSpeakingAspectController],
  providers: [QualsSpeakingAspectService, QualsSpeakingAspectResolver],
  exports: [QualsSpeakingAspectService],
})
export class QualsSpeakingAspectModule {}
