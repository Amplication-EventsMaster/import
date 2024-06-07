import { Module } from "@nestjs/common";
import { InternshipsCdModuleBase } from "./base/internshipsCd.module.base";
import { InternshipsCdService } from "./internshipsCd.service";
import { InternshipsCdController } from "./internshipsCd.controller";
import { InternshipsCdResolver } from "./internshipsCd.resolver";

@Module({
  imports: [InternshipsCdModuleBase],
  controllers: [InternshipsCdController],
  providers: [InternshipsCdService, InternshipsCdResolver],
  exports: [InternshipsCdService],
})
export class InternshipsCdModule {}
