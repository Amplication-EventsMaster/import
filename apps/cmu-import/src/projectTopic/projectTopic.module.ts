import { Module } from "@nestjs/common";
import { ProjectTopicModuleBase } from "./base/projectTopic.module.base";
import { ProjectTopicService } from "./projectTopic.service";
import { ProjectTopicController } from "./projectTopic.controller";
import { ProjectTopicResolver } from "./projectTopic.resolver";

@Module({
  imports: [ProjectTopicModuleBase],
  controllers: [ProjectTopicController],
  providers: [ProjectTopicService, ProjectTopicResolver],
  exports: [ProjectTopicService],
})
export class ProjectTopicModule {}
