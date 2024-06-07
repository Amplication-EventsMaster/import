import { Module } from "@nestjs/common";
import { InstitutionModuleBase } from "./base/institution.module.base";
import { InstitutionService } from "./institution.service";
import { InstitutionController } from "./institution.controller";
import { InstitutionResolver } from "./institution.resolver";

@Module({
  imports: [InstitutionModuleBase],
  controllers: [InstitutionController],
  providers: [InstitutionService, InstitutionResolver],
  exports: [InstitutionService],
})
export class InstitutionModule {}
