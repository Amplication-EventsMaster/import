import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { NewCourseServiceBase } from "./base/newCourse.service.base";

@Injectable()
export class NewCourseService extends NewCourseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
