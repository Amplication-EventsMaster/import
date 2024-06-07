import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EvaluatorService } from "./evaluator.service";
import { EvaluatorControllerBase } from "./base/evaluator.controller.base";

@swagger.ApiTags("evaluators")
@common.Controller("evaluators")
export class EvaluatorController extends EvaluatorControllerBase {
  constructor(protected readonly service: EvaluatorService) {
    super(service);
  }
}
