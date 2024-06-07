import * as graphql from "@nestjs/graphql";
import { ReviewPeriodReferenceResolverBase } from "./base/reviewPeriodReference.resolver.base";
import { ReviewPeriodReference } from "./base/ReviewPeriodReference";
import { ReviewPeriodReferenceService } from "./reviewPeriodReference.service";

@graphql.Resolver(() => ReviewPeriodReference)
export class ReviewPeriodReferenceResolver extends ReviewPeriodReferenceResolverBase {
  constructor(protected readonly service: ReviewPeriodReferenceService) {
    super(service);
  }
}
