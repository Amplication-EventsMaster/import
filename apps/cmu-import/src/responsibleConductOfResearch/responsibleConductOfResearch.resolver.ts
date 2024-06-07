import * as graphql from "@nestjs/graphql";
import { ResponsibleConductOfResearchResolverBase } from "./base/responsibleConductOfResearch.resolver.base";
import { ResponsibleConductOfResearch } from "./base/ResponsibleConductOfResearch";
import { ResponsibleConductOfResearchService } from "./responsibleConductOfResearch.service";

@graphql.Resolver(() => ResponsibleConductOfResearch)
export class ResponsibleConductOfResearchResolver extends ResponsibleConductOfResearchResolverBase {
  constructor(protected readonly service: ResponsibleConductOfResearchService) {
    super(service);
  }
}
