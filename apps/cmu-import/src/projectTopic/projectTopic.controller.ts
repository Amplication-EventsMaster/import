import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProjectTopicService } from "./projectTopic.service";
import { ProjectTopicControllerBase } from "./base/projectTopic.controller.base";

@swagger.ApiTags("projectTopics")
@common.Controller("projectTopics")
export class ProjectTopicController extends ProjectTopicControllerBase {
  constructor(protected readonly service: ProjectTopicService) {
    super(service);
  }
}
