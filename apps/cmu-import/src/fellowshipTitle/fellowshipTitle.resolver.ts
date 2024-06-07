import * as graphql from "@nestjs/graphql";
import { FellowshipTitleResolverBase } from "./base/fellowshipTitle.resolver.base";
import { FellowshipTitle } from "./base/FellowshipTitle";
import { FellowshipTitleService } from "./fellowshipTitle.service";

@graphql.Resolver(() => FellowshipTitle)
export class FellowshipTitleResolver extends FellowshipTitleResolverBase {
  constructor(protected readonly service: FellowshipTitleService) {
    super(service);
  }
}
