import { Module } from "@nestjs/common";
import { RawDataLetterModuleBase } from "./base/rawDataLetter.module.base";
import { RawDataLetterService } from "./rawDataLetter.service";
import { RawDataLetterController } from "./rawDataLetter.controller";
import { RawDataLetterResolver } from "./rawDataLetter.resolver";

@Module({
  imports: [RawDataLetterModuleBase],
  controllers: [RawDataLetterController],
  providers: [RawDataLetterService, RawDataLetterResolver],
  exports: [RawDataLetterService],
})
export class RawDataLetterModule {}
