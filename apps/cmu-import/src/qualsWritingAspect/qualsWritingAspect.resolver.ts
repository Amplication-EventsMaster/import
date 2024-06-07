import * as graphql from "@nestjs/graphql";
import { QualsWritingAspectResolverBase } from "./base/qualsWritingAspect.resolver.base";
import { QualsWritingAspect } from "./base/QualsWritingAspect";
import { QualsWritingAspectService } from "./qualsWritingAspect.service";

@graphql.Resolver(() => QualsWritingAspect)
export class QualsWritingAspectResolver extends QualsWritingAspectResolverBase {
  constructor(protected readonly service: QualsWritingAspectService) {
    super(service);
  }
}
