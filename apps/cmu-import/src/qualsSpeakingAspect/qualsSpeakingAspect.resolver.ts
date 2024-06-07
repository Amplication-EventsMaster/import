import * as graphql from "@nestjs/graphql";
import { QualsSpeakingAspectResolverBase } from "./base/qualsSpeakingAspect.resolver.base";
import { QualsSpeakingAspect } from "./base/QualsSpeakingAspect";
import { QualsSpeakingAspectService } from "./qualsSpeakingAspect.service";

@graphql.Resolver(() => QualsSpeakingAspect)
export class QualsSpeakingAspectResolver extends QualsSpeakingAspectResolverBase {
  constructor(protected readonly service: QualsSpeakingAspectService) {
    super(service);
  }
}
