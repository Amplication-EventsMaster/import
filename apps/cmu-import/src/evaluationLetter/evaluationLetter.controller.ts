import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EvaluationLetterService } from "./evaluationLetter.service";
import { EvaluationLetterControllerBase } from "./base/evaluationLetter.controller.base";

@swagger.ApiTags("evaluationLetters")
@common.Controller("evaluationLetters")
export class EvaluationLetterController extends EvaluationLetterControllerBase {
  constructor(protected readonly service: EvaluationLetterService) {
    super(service);
  }
}
