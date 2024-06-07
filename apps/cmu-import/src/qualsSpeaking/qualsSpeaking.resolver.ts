import * as graphql from "@nestjs/graphql";
import { QualsSpeakingResolverBase } from "./base/qualsSpeaking.resolver.base";
import { QualsSpeaking } from "./base/QualsSpeaking";
import { QualsSpeakingService } from "./qualsSpeaking.service";

@graphql.Resolver(() => QualsSpeaking)
export class QualsSpeakingResolver extends QualsSpeakingResolverBase {
  constructor(protected readonly service: QualsSpeakingService) {
    super(service);
  }
}
