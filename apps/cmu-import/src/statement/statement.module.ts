import { Module } from "@nestjs/common";
import { StatementModuleBase } from "./base/statement.module.base";
import { StatementService } from "./statement.service";
import { StatementController } from "./statement.controller";
import { StatementResolver } from "./statement.resolver";

@Module({
  imports: [StatementModuleBase],
  controllers: [StatementController],
  providers: [StatementService, StatementResolver],
  exports: [StatementService],
})
export class StatementModule {}
