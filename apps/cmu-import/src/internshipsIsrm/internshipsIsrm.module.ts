import { Module } from "@nestjs/common";
import { InternshipsIsrmModuleBase } from "./base/internshipsIsrm.module.base";
import { InternshipsIsrmService } from "./internshipsIsrm.service";
import { InternshipsIsrmController } from "./internshipsIsrm.controller";
import { InternshipsIsrmResolver } from "./internshipsIsrm.resolver";

@Module({
  imports: [InternshipsIsrmModuleBase],
  controllers: [InternshipsIsrmController],
  providers: [InternshipsIsrmService, InternshipsIsrmResolver],
  exports: [InternshipsIsrmService],
})
export class InternshipsIsrmModule {}
