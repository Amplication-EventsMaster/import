import * as graphql from "@nestjs/graphql";
import { QualsResearchResolverBase } from "./base/qualsResearch.resolver.base";
import { QualsResearch } from "./base/QualsResearch";
import { QualsResearchService } from "./qualsResearch.service";

@graphql.Resolver(() => QualsResearch)
export class QualsResearchResolver extends QualsResearchResolverBase {
  constructor(protected readonly service: QualsResearchService) {
    super(service);
  }
}
