import { Module } from "@nestjs/common";
import { AgendaModuleBase } from "./base/agenda.module.base";
import { AgendaService } from "./agenda.service";
import { AgendaController } from "./agenda.controller";
import { AgendaResolver } from "./agenda.resolver";

@Module({
  imports: [AgendaModuleBase],
  controllers: [AgendaController],
  providers: [AgendaService, AgendaResolver],
  exports: [AgendaService],
})
export class AgendaModule {}
