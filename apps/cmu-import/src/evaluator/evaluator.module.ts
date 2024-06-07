import { Module } from "@nestjs/common";
import { EvaluatorModuleBase } from "./base/evaluator.module.base";
import { EvaluatorService } from "./evaluator.service";
import { EvaluatorController } from "./evaluator.controller";
import { EvaluatorResolver } from "./evaluator.resolver";

@Module({
  imports: [EvaluatorModuleBase],
  controllers: [EvaluatorController],
  providers: [EvaluatorService, EvaluatorResolver],
  exports: [EvaluatorService],
})
export class EvaluatorModule {}
