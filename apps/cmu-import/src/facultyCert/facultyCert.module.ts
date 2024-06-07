import { Module } from "@nestjs/common";
import { FacultyCertModuleBase } from "./base/facultyCert.module.base";
import { FacultyCertService } from "./facultyCert.service";
import { FacultyCertController } from "./facultyCert.controller";
import { FacultyCertResolver } from "./facultyCert.resolver";

@Module({
  imports: [FacultyCertModuleBase],
  controllers: [FacultyCertController],
  providers: [FacultyCertService, FacultyCertResolver],
  exports: [FacultyCertService],
})
export class FacultyCertModule {}
