import * as graphql from "@nestjs/graphql";
import { BlackfridayApplywebApplicationResolverBase } from "./base/blackfridayApplywebApplication.resolver.base";
import { BlackfridayApplywebApplication } from "./base/BlackfridayApplywebApplication";
import { BlackfridayApplywebApplicationService } from "./blackfridayApplywebApplication.service";

@graphql.Resolver(() => BlackfridayApplywebApplication)
export class BlackfridayApplywebApplicationResolver extends BlackfridayApplywebApplicationResolverBase {
  constructor(
    protected readonly service: BlackfridayApplywebApplicationService
  ) {
    super(service);
  }
}
