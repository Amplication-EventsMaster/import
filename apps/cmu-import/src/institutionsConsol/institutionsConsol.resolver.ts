import * as graphql from "@nestjs/graphql";
import { InstitutionsConsolResolverBase } from "./base/institutionsConsol.resolver.base";
import { InstitutionsConsol } from "./base/InstitutionsConsol";
import { InstitutionsConsolService } from "./institutionsConsol.service";

@graphql.Resolver(() => InstitutionsConsol)
export class InstitutionsConsolResolver extends InstitutionsConsolResolverBase {
  constructor(protected readonly service: InstitutionsConsolService) {
    super(service);
  }
}
