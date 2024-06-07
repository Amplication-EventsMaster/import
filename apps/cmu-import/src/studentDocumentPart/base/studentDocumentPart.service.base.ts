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
  StudentDocumentPart as PrismaStudentDocumentPart,
} from "@prisma/client";

export class StudentDocumentPartServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.StudentDocumentPartCountArgs, "select">
  ): Promise<number> {
    return this.prisma.studentDocumentPart.count(args);
  }

  async studentDocumentParts<T extends Prisma.StudentDocumentPartFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.StudentDocumentPartFindManyArgs>
  ): Promise<PrismaStudentDocumentPart[]> {
    return this.prisma.studentDocumentPart.findMany<Prisma.StudentDocumentPartFindManyArgs>(
      args
    );
  }
  async studentDocumentPart<T extends Prisma.StudentDocumentPartFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.StudentDocumentPartFindUniqueArgs>
  ): Promise<PrismaStudentDocumentPart | null> {
    return this.prisma.studentDocumentPart.findUnique(args);
  }
  async createStudentDocumentPart<
    T extends Prisma.StudentDocumentPartCreateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.StudentDocumentPartCreateArgs>
  ): Promise<PrismaStudentDocumentPart> {
    return this.prisma.studentDocumentPart.create<T>(args);
  }
  async updateStudentDocumentPart<
    T extends Prisma.StudentDocumentPartUpdateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.StudentDocumentPartUpdateArgs>
  ): Promise<PrismaStudentDocumentPart> {
    return this.prisma.studentDocumentPart.update<T>(args);
  }
  async deleteStudentDocumentPart<
    T extends Prisma.StudentDocumentPartDeleteArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.StudentDocumentPartDeleteArgs>
  ): Promise<PrismaStudentDocumentPart> {
    return this.prisma.studentDocumentPart.delete(args);
  }
}
