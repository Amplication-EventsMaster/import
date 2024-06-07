import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StudentCourseServiceBase } from "./base/studentCourse.service.base";

@Injectable()
export class StudentCourseService extends StudentCourseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
