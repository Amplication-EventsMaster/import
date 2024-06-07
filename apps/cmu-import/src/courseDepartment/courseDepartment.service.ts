import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CourseDepartmentServiceBase } from "./base/courseDepartment.service.base";

@Injectable()
export class CourseDepartmentService extends CourseDepartmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
