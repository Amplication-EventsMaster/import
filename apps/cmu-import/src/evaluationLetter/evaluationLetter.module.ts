import { Module } from "@nestjs/common";
import { EvaluationLetterModuleBase } from "./base/evaluationLetter.module.base";
import { EvaluationLetterService } from "./evaluationLetter.service";
import { EvaluationLetterController } from "./evaluationLetter.controller";
import { EvaluationLetterResolver } from "./evaluationLetter.resolver";

@Module({
  imports: [EvaluationLetterModuleBase],
  controllers: [EvaluationLetterController],
  providers: [EvaluationLetterService, EvaluationLetterResolver],
  exports: [EvaluationLetterService],
})
export class EvaluationLetterModule {}
