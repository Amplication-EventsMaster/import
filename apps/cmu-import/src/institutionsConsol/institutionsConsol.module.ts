import { Module } from "@nestjs/common";
import { InstitutionsConsolModuleBase } from "./base/institutionsConsol.module.base";
import { InstitutionsConsolService } from "./institutionsConsol.service";
import { InstitutionsConsolController } from "./institutionsConsol.controller";
import { InstitutionsConsolResolver } from "./institutionsConsol.resolver";

@Module({
  imports: [InstitutionsConsolModuleBase],
  controllers: [InstitutionsConsolController],
  providers: [InstitutionsConsolService, InstitutionsConsolResolver],
  exports: [InstitutionsConsolService],
})
export class InstitutionsConsolModule {}
