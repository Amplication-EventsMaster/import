import * as graphql from "@nestjs/graphql";
import { DegreeStatusResolverBase } from "./base/degreeStatus.resolver.base";
import { DegreeStatus } from "./base/DegreeStatus";
import { DegreeStatusService } from "./degreeStatus.service";

@graphql.Resolver(() => DegreeStatus)
export class DegreeStatusResolver extends DegreeStatusResolverBase {
  constructor(protected readonly service: DegreeStatusService) {
    super(service);
  }
}
