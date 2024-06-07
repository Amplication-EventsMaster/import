import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProjectTopicServiceBase } from "./base/projectTopic.service.base";

@Injectable()
export class ProjectTopicService extends ProjectTopicServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
