import { Module } from "@nestjs/common";
import { AgendaItemModuleBase } from "./base/agendaItem.module.base";
import { AgendaItemService } from "./agendaItem.service";
import { AgendaItemController } from "./agendaItem.controller";
import { AgendaItemResolver } from "./agendaItem.resolver";

@Module({
  imports: [AgendaItemModuleBase],
  controllers: [AgendaItemController],
  providers: [AgendaItemService, AgendaItemResolver],
  exports: [AgendaItemService],
})
export class AgendaItemModule {}
