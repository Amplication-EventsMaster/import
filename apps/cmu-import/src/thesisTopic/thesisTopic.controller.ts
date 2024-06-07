import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ThesisTopicService } from "./thesisTopic.service";
import { ThesisTopicControllerBase } from "./base/thesisTopic.controller.base";

@swagger.ApiTags("thesisTopics")
@common.Controller("thesisTopics")
export class ThesisTopicController extends ThesisTopicControllerBase {
  constructor(protected readonly service: ThesisTopicService) {
    super(service);
  }
}
