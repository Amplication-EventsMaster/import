import { Module } from "@nestjs/common";
import { InstituteModuleBase } from "./base/institute.module.base";
import { InstituteService } from "./institute.service";
import { InstituteController } from "./institute.controller";
import { InstituteResolver } from "./institute.resolver";

@Module({
  imports: [InstituteModuleBase],
  controllers: [InstituteController],
  providers: [InstituteService, InstituteResolver],
  exports: [InstituteService],
})
export class InstituteModule {}
