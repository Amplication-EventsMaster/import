import * as graphql from "@nestjs/graphql";
import { LegacyRequirementResolverBase } from "./base/legacyRequirement.resolver.base";
import { LegacyRequirement } from "./base/LegacyRequirement";
import { LegacyRequirementService } from "./legacyRequirement.service";

@graphql.Resolver(() => LegacyRequirement)
export class LegacyRequirementResolver extends LegacyRequirementResolverBase {
  constructor(protected readonly service: LegacyRequirementService) {
    super(service);
  }
}
