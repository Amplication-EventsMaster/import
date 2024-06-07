import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ThesisTopicServiceBase } from "./base/thesisTopic.service.base";

@Injectable()
export class ThesisTopicService extends ThesisTopicServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
