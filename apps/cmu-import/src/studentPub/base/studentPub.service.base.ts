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
  StudentPub as PrismaStudentPub,
  StudentDatum as PrismaStudentDatum,
} from "@prisma/client";

export class StudentPubServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.StudentPubCountArgs, "select">
  ): Promise<number> {
    return this.prisma.studentPub.count(args);
  }

  async studentPubs<T extends Prisma.StudentPubFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.StudentPubFindManyArgs>
  ): Promise<PrismaStudentPub[]> {
    return this.prisma.studentPub.findMany<Prisma.StudentPubFindManyArgs>(args);
  }
  async studentPub<T extends Prisma.StudentPubFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.StudentPubFindUniqueArgs>
  ): Promise<PrismaStudentPub | null> {
    return this.prisma.studentPub.findUnique(args);
  }
  async createStudentPub<T extends Prisma.StudentPubCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.StudentPubCreateArgs>
  ): Promise<PrismaStudentPub> {
    return this.prisma.studentPub.create<T>(args);
  }
  async updateStudentPub<T extends Prisma.StudentPubUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.StudentPubUpdateArgs>
  ): Promise<PrismaStudentPub> {
    return this.prisma.studentPub.update<T>(args);
  }
  async deleteStudentPub<T extends Prisma.StudentPubDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.StudentPubDeleteArgs>
  ): Promise<PrismaStudentPub> {
    return this.prisma.studentPub.delete(args);
  }

  async getStudentData(parentId: number): Promise<PrismaStudentDatum | null> {
    return this.prisma.studentPub
      .findUnique({
        where: { id: parentId },
      })
      .studentData();
  }
}
