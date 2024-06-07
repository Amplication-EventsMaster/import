import { Module } from "@nestjs/common";
import { AreaModuleBase } from "./base/area.module.base";
import { AreaService } from "./area.service";
import { AreaController } from "./area.controller";
import { AreaResolver } from "./area.resolver";

@Module({
  imports: [AreaModuleBase],
  controllers: [AreaController],
  providers: [AreaService, AreaResolver],
  exports: [AreaService],
})
export class AreaModule {}
