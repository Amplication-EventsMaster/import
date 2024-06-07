import * as graphql from "@nestjs/graphql";
import { QualsResearchForOtherStudentResolverBase } from "./base/qualsResearchForOtherStudent.resolver.base";
import { QualsResearchForOtherStudent } from "./base/QualsResearchForOtherStudent";
import { QualsResearchForOtherStudentService } from "./qualsResearchForOtherStudent.service";

@graphql.Resolver(() => QualsResearchForOtherStudent)
export class QualsResearchForOtherStudentResolver extends QualsResearchForOtherStudentResolverBase {
  constructor(protected readonly service: QualsResearchForOtherStudentService) {
    super(service);
  }
}
