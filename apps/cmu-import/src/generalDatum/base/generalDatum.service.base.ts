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
  GeneralDatum as PrismaGeneralDatum,
  StudentDatum as PrismaStudentDatum,
} from "@prisma/client";

export class GeneralDatumServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.GeneralDatumCountArgs, "select">
  ): Promise<number> {
    return this.prisma.generalDatum.count(args);
  }

  async generalData<T extends Prisma.GeneralDatumFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.GeneralDatumFindManyArgs>
  ): Promise<PrismaGeneralDatum[]> {
    return this.prisma.generalDatum.findMany<Prisma.GeneralDatumFindManyArgs>(
      args
    );
  }
  async generalDatum<T extends Prisma.GeneralDatumFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.GeneralDatumFindUniqueArgs>
  ): Promise<PrismaGeneralDatum | null> {
    return this.prisma.generalDatum.findUnique(args);
  }
  async createGeneralDatum<T extends Prisma.GeneralDatumCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.GeneralDatumCreateArgs>
  ): Promise<PrismaGeneralDatum> {
    return this.prisma.generalDatum.create<T>(args);
  }
  async updateGeneralDatum<T extends Prisma.GeneralDatumUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.GeneralDatumUpdateArgs>
  ): Promise<PrismaGeneralDatum> {
    return this.prisma.generalDatum.update<T>(args);
  }
  async deleteGeneralDatum<T extends Prisma.GeneralDatumDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.GeneralDatumDeleteArgs>
  ): Promise<PrismaGeneralDatum> {
    return this.prisma.generalDatum.delete(args);
  }

  async getStudentData(parentId: number): Promise<PrismaStudentDatum | null> {
    return this.prisma.generalDatum
      .findUnique({
        where: { id: parentId },
      })
      .studentData();
  }
}
