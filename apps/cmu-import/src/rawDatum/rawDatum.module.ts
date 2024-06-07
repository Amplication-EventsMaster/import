import { Module } from "@nestjs/common";
import { RawDatumModuleBase } from "./base/rawDatum.module.base";
import { RawDatumService } from "./rawDatum.service";
import { RawDatumController } from "./rawDatum.controller";
import { RawDatumResolver } from "./rawDatum.resolver";

@Module({
  imports: [RawDatumModuleBase],
  controllers: [RawDatumController],
  providers: [RawDatumService, RawDatumResolver],
  exports: [RawDatumService],
})
export class RawDatumModule {}
