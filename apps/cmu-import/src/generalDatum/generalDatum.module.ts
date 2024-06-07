import { Module } from "@nestjs/common";
import { GeneralDatumModuleBase } from "./base/generalDatum.module.base";
import { GeneralDatumService } from "./generalDatum.service";
import { GeneralDatumController } from "./generalDatum.controller";
import { GeneralDatumResolver } from "./generalDatum.resolver";

@Module({
  imports: [GeneralDatumModuleBase],
  controllers: [GeneralDatumController],
  providers: [GeneralDatumService, GeneralDatumResolver],
  exports: [GeneralDatumService],
})
export class GeneralDatumModule {}
