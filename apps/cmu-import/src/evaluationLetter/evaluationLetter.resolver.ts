import * as graphql from "@nestjs/graphql";
import { EvaluationLetterResolverBase } from "./base/evaluationLetter.resolver.base";
import { EvaluationLetter } from "./base/EvaluationLetter";
import { EvaluationLetterService } from "./evaluationLetter.service";

@graphql.Resolver(() => EvaluationLetter)
export class EvaluationLetterResolver extends EvaluationLetterResolverBase {
  constructor(protected readonly service: EvaluationLetterService) {
    super(service);
  }
}
