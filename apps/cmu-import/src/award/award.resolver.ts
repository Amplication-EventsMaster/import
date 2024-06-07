import * as graphql from "@nestjs/graphql";
import { AwardResolverBase } from "./base/award.resolver.base";
import { Award } from "./base/Award";
import { AwardService } from "./award.service";

@graphql.Resolver(() => Award)
export class AwardResolver extends AwardResolverBase {
  constructor(protected readonly service: AwardService) {
    super(service);
  }
}
