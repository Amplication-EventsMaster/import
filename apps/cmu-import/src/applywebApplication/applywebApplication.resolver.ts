import * as graphql from "@nestjs/graphql";
import { ApplywebApplicationResolverBase } from "./base/applywebApplication.resolver.base";
import { ApplywebApplication } from "./base/ApplywebApplication";
import { ApplywebApplicationService } from "./applywebApplication.service";

@graphql.Resolver(() => ApplywebApplication)
export class ApplywebApplicationResolver extends ApplywebApplicationResolverBase {
  constructor(protected readonly service: ApplywebApplicationService) {
    super(service);
  }
}
