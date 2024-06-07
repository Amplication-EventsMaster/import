import { Module } from "@nestjs/common";
import { ItaModuleBase } from "./base/ita.module.base";
import { ItaService } from "./ita.service";
import { ItaController } from "./ita.controller";
import { ItaResolver } from "./ita.resolver";

@Module({
  imports: [ItaModuleBase],
  controllers: [ItaController],
  providers: [ItaService, ItaResolver],
  exports: [ItaService],
})
export class ItaModule {}
