import * as graphql from "@nestjs/graphql";
import { EvaluatorResolverBase } from "./base/evaluator.resolver.base";
import { Evaluator } from "./base/Evaluator";
import { EvaluatorService } from "./evaluator.service";

@graphql.Resolver(() => Evaluator)
export class EvaluatorResolver extends EvaluatorResolverBase {
  constructor(protected readonly service: EvaluatorService) {
    super(service);
  }
}
