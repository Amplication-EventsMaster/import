import { Module } from "@nestjs/common";
import { ThesisTopicModuleBase } from "./base/thesisTopic.module.base";
import { ThesisTopicService } from "./thesisTopic.service";
import { ThesisTopicController } from "./thesisTopic.controller";
import { ThesisTopicResolver } from "./thesisTopic.resolver";

@Module({
  imports: [ThesisTopicModuleBase],
  controllers: [ThesisTopicController],
  providers: [ThesisTopicService, ThesisTopicResolver],
  exports: [ThesisTopicService],
})
export class ThesisTopicModule {}
