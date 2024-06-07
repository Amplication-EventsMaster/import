import * as graphql from "@nestjs/graphql";
import { PresentationResolverBase } from "./base/presentation.resolver.base";
import { Presentation } from "./base/Presentation";
import { PresentationService } from "./presentation.service";

@graphql.Resolver(() => Presentation)
export class PresentationResolver extends PresentationResolverBase {
  constructor(protected readonly service: PresentationService) {
    super(service);
  }
}
