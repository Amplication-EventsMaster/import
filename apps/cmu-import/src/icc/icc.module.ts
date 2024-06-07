import { Module } from "@nestjs/common";
import { IccModuleBase } from "./base/icc.module.base";
import { IccService } from "./icc.service";
import { IccController } from "./icc.controller";
import { IccResolver } from "./icc.resolver";

@Module({
  imports: [IccModuleBase],
  controllers: [IccController],
  providers: [IccService, IccResolver],
  exports: [IccService],
})
export class IccModule {}
