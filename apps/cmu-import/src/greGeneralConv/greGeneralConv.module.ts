import { Module } from "@nestjs/common";
import { GreGeneralConvModuleBase } from "./base/greGeneralConv.module.base";
import { GreGeneralConvService } from "./greGeneralConv.service";
import { GreGeneralConvController } from "./greGeneralConv.controller";
import { GreGeneralConvResolver } from "./greGeneralConv.resolver";

@Module({
  imports: [GreGeneralConvModuleBase],
  controllers: [GreGeneralConvController],
  providers: [GreGeneralConvService, GreGeneralConvResolver],
  exports: [GreGeneralConvService],
})
export class GreGeneralConvModule {}
