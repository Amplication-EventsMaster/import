import * as graphql from "@nestjs/graphql";
import { InstitutionResolverBase } from "./base/institution.resolver.base";
import { Institution } from "./base/Institution";
import { InstitutionService } from "./institution.service";

@graphql.Resolver(() => Institution)
export class InstitutionResolver extends InstitutionResolverBase {
  constructor(protected readonly service: InstitutionService) {
    super(service);
  }
}
