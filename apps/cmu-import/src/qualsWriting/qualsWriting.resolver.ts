import * as graphql from "@nestjs/graphql";
import { QualsWritingResolverBase } from "./base/qualsWriting.resolver.base";
import { QualsWriting } from "./base/QualsWriting";
import { QualsWritingService } from "./qualsWriting.service";

@graphql.Resolver(() => QualsWriting)
export class QualsWritingResolver extends QualsWritingResolverBase {
  constructor(protected readonly service: QualsWritingService) {
    super(service);
  }
}
