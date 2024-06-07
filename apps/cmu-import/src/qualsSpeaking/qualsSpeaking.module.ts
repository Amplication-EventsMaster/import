import { Module } from "@nestjs/common";
import { QualsSpeakingModuleBase } from "./base/qualsSpeaking.module.base";
import { QualsSpeakingService } from "./qualsSpeaking.service";
import { QualsSpeakingController } from "./qualsSpeaking.controller";
import { QualsSpeakingResolver } from "./qualsSpeaking.resolver";

@Module({
  imports: [QualsSpeakingModuleBase],
  controllers: [QualsSpeakingController],
  providers: [QualsSpeakingService, QualsSpeakingResolver],
  exports: [QualsSpeakingService],
})
export class QualsSpeakingModule {}
