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
  Award as PrismaAward,
  StudentDatum as PrismaStudentDatum,
} from "@prisma/client";

export class AwardServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.AwardCountArgs, "select">): Promise<number> {
    return this.prisma.award.count(args);
  }

  async awards<T extends Prisma.AwardFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AwardFindManyArgs>
  ): Promise<PrismaAward[]> {
    return this.prisma.award.findMany<Prisma.AwardFindManyArgs>(args);
  }
  async award<T extends Prisma.AwardFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AwardFindUniqueArgs>
  ): Promise<PrismaAward | null> {
    return this.prisma.award.findUnique(args);
  }
  async createAward<T extends Prisma.AwardCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AwardCreateArgs>
  ): Promise<PrismaAward> {
    return this.prisma.award.create<T>(args);
  }
  async updateAward<T extends Prisma.AwardUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AwardUpdateArgs>
  ): Promise<PrismaAward> {
    return this.prisma.award.update<T>(args);
  }
  async deleteAward<T extends Prisma.AwardDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AwardDeleteArgs>
  ): Promise<PrismaAward> {
    return this.prisma.award.delete(args);
  }

  async getStudentData(parentId: number): Promise<PrismaStudentDatum | null> {
    return this.prisma.award
      .findUnique({
        where: { id: parentId },
      })
      .studentData();
  }
}
