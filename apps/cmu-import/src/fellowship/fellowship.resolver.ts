import * as graphql from "@nestjs/graphql";
import { FellowshipResolverBase } from "./base/fellowship.resolver.base";
import { Fellowship } from "./base/Fellowship";
import { FellowshipService } from "./fellowship.service";

@graphql.Resolver(() => Fellowship)
export class FellowshipResolver extends FellowshipResolverBase {
  constructor(protected readonly service: FellowshipService) {
    super(service);
  }
}
