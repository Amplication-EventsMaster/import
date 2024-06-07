import * as graphql from "@nestjs/graphql";
import { ProjectTopicResolverBase } from "./base/projectTopic.resolver.base";
import { ProjectTopic } from "./base/ProjectTopic";
import { ProjectTopicService } from "./projectTopic.service";

@graphql.Resolver(() => ProjectTopic)
export class ProjectTopicResolver extends ProjectTopicResolverBase {
  constructor(protected readonly service: ProjectTopicService) {
    super(service);
  }
}
