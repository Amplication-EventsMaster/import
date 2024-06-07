import * as graphql from "@nestjs/graphql";
import { ThesisTopicResolverBase } from "./base/thesisTopic.resolver.base";
import { ThesisTopic } from "./base/ThesisTopic";
import { ThesisTopicService } from "./thesisTopic.service";

@graphql.Resolver(() => ThesisTopic)
export class ThesisTopicResolver extends ThesisTopicResolverBase {
  constructor(protected readonly service: ThesisTopicService) {
    super(service);
  }
}
