import { Module } from "@nestjs/common";
import { QualsWritingAspectModuleBase } from "./base/qualsWritingAspect.module.base";
import { QualsWritingAspectService } from "./qualsWritingAspect.service";
import { QualsWritingAspectController } from "./qualsWritingAspect.controller";
import { QualsWritingAspectResolver } from "./qualsWritingAspect.resolver";

@Module({
  imports: [QualsWritingAspectModuleBase],
  controllers: [QualsWritingAspectController],
  providers: [QualsWritingAspectService, QualsWritingAspectResolver],
  exports: [QualsWritingAspectService],
})
export class QualsWritingAspectModule {}
