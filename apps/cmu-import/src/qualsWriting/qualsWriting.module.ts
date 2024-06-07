import { Module } from "@nestjs/common";
import { QualsWritingModuleBase } from "./base/qualsWriting.module.base";
import { QualsWritingService } from "./qualsWriting.service";
import { QualsWritingController } from "./qualsWriting.controller";
import { QualsWritingResolver } from "./qualsWriting.resolver";

@Module({
  imports: [QualsWritingModuleBase],
  controllers: [QualsWritingController],
  providers: [QualsWritingService, QualsWritingResolver],
  exports: [QualsWritingService],
})
export class QualsWritingModule {}
