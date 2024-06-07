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
  NewCourseDepartment as PrismaNewCourseDepartment,
} from "@prisma/client";

export class NewCourseDepartmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.NewCourseDepartmentCountArgs, "select">
  ): Promise<number> {
    return this.prisma.newCourseDepartment.count(args);
  }

  async newCourseDepartments<T extends Prisma.NewCourseDepartmentFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.NewCourseDepartmentFindManyArgs>
  ): Promise<PrismaNewCourseDepartment[]> {
    return this.prisma.newCourseDepartment.findMany<Prisma.NewCourseDepartmentFindManyArgs>(
      args
    );
  }
  async newCourseDepartment<T extends Prisma.NewCourseDepartmentFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.NewCourseDepartmentFindUniqueArgs>
  ): Promise<PrismaNewCourseDepartment | null> {
    return this.prisma.newCourseDepartment.findUnique(args);
  }
  async createNewCourseDepartment<
    T extends Prisma.NewCourseDepartmentCreateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.NewCourseDepartmentCreateArgs>
  ): Promise<PrismaNewCourseDepartment> {
    return this.prisma.newCourseDepartment.create<T>(args);
  }
  async updateNewCourseDepartment<
    T extends Prisma.NewCourseDepartmentUpdateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.NewCourseDepartmentUpdateArgs>
  ): Promise<PrismaNewCourseDepartment> {
    return this.prisma.newCourseDepartment.update<T>(args);
  }
  async deleteNewCourseDepartment<
    T extends Prisma.NewCourseDepartmentDeleteArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.NewCourseDepartmentDeleteArgs>
  ): Promise<PrismaNewCourseDepartment> {
    return this.prisma.newCourseDepartment.delete(args);
  }
}
