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
  QualsWriting as PrismaQualsWriting,
  QualsWritingAspect as PrismaQualsWritingAspect,
  QualsCommittee as PrismaQualsCommittee,
} from "@prisma/client";

export class QualsWritingServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.QualsWritingCountArgs, "select">
  ): Promise<number> {
    return this.prisma.qualsWriting.count(args);
  }

  async qualsWritings<T extends Prisma.QualsWritingFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.QualsWritingFindManyArgs>
  ): Promise<PrismaQualsWriting[]> {
    return this.prisma.qualsWriting.findMany<Prisma.QualsWritingFindManyArgs>(
      args
    );
  }
  async qualsWriting<T extends Prisma.QualsWritingFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.QualsWritingFindUniqueArgs>
  ): Promise<PrismaQualsWriting | null> {
    return this.prisma.qualsWriting.findUnique(args);
  }
  async createQualsWriting<T extends Prisma.QualsWritingCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.QualsWritingCreateArgs>
  ): Promise<PrismaQualsWriting> {
    return this.prisma.qualsWriting.create<T>(args);
  }
  async updateQualsWriting<T extends Prisma.QualsWritingUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.QualsWritingUpdateArgs>
  ): Promise<PrismaQualsWriting> {
    return this.prisma.qualsWriting.update<T>(args);
  }
  async deleteQualsWriting<T extends Prisma.QualsWritingDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.QualsWritingDeleteArgs>
  ): Promise<PrismaQualsWriting> {
    return this.prisma.qualsWriting.delete(args);
  }

  async findQualsWritingAspect(
    parentId: number,
    args: Prisma.QualsWritingAspectFindManyArgs
  ): Promise<PrismaQualsWritingAspect[]> {
    return this.prisma.qualsWriting
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .qualsWritingAspect(args);
  }

  async getQualsCommittee(
    parentId: number
  ): Promise<PrismaQualsCommittee | null> {
    return this.prisma.qualsWriting
      .findUnique({
        where: { id: parentId },
      })
      .qualsCommittee();
  }
}
