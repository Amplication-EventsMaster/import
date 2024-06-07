import { Module } from "@nestjs/common";
import { InternshipsIniModuleBase } from "./base/internshipsIni.module.base";
import { InternshipsIniService } from "./internshipsIni.service";
import { InternshipsIniController } from "./internshipsIni.controller";
import { InternshipsIniResolver } from "./internshipsIni.resolver";

@Module({
  imports: [InternshipsIniModuleBase],
  controllers: [InternshipsIniController],
  providers: [InternshipsIniService, InternshipsIniResolver],
  exports: [InternshipsIniService],
})
export class InternshipsIniModule {}
