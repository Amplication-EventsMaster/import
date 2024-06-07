import * as graphql from "@nestjs/graphql";
import { StudentCourseResolverBase } from "./base/studentCourse.resolver.base";
import { StudentCourse } from "./base/StudentCourse";
import { StudentCourseService } from "./studentCourse.service";

@graphql.Resolver(() => StudentCourse)
export class StudentCourseResolver extends StudentCourseResolverBase {
  constructor(protected readonly service: StudentCourseService) {
    super(service);
  }
}
