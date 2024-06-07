/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  ProjectTopic as PrismaProjectTopic,
  StudentDatum as PrismaStudentDatum,
} from "@prisma/client";

export class ProjectTopicServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ProjectTopicCountArgs, "select">
  ): Promise<number> {
    return this.prisma.projectTopic.count(args);
  }

  async projectTopics<T extends Prisma.ProjectTopicFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProjectTopicFindManyArgs>
  ): Promise<PrismaProjectTopic[]> {
    return this.prisma.projectTopic.findMany<Prisma.ProjectTopicFindManyArgs>(
      args
    );
  }
  async projectTopic<T extends Prisma.ProjectTopicFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProjectTopicFindUniqueArgs>
  ): Promise<PrismaProjectTopic | null> {
    return this.prisma.projectTopic.findUnique(args);
  }
  async createProjectTopic<T extends Prisma.ProjectTopicCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProjectTopicCreateArgs>
  ): Promise<PrismaProjectTopic> {
    return this.prisma.projectTopic.create<T>(args);
  }
  async updateProjectTopic<T extends Prisma.ProjectTopicUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProjectTopicUpdateArgs>
  ): Promise<PrismaProjectTopic> {
    return this.prisma.projectTopic.update<T>(args);
  }
  async deleteProjectTopic<T extends Prisma.ProjectTopicDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProjectTopicDeleteArgs>
  ): Promise<PrismaProjectTopic> {
    return this.prisma.projectTopic.delete(args);
  }

  async getStudentData(parentId: number): Promise<PrismaStudentDatum | null> {
    return this.prisma.projectTopic
      .findUnique({
        where: { id: parentId },
      })
      .studentData();
  }
}
