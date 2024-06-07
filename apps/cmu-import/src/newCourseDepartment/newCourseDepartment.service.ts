import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { NewCourseDepartmentServiceBase } from "./base/newCourseDepartment.service.base";

@Injectable()
export class NewCourseDepartmentService extends NewCourseDepartmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
