import { Module } from "@nestjs/common";
import { PresentationModuleBase } from "./base/presentation.module.base";
import { PresentationService } from "./presentation.service";
import { PresentationController } from "./presentation.controller";
import { PresentationResolver } from "./presentation.resolver";

@Module({
  imports: [PresentationModuleBase],
  controllers: [PresentationController],
  providers: [PresentationService, PresentationResolver],
  exports: [PresentationService],
})
export class PresentationModule {}
