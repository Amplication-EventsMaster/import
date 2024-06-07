import * as graphql from "@nestjs/graphql";
import { NewCourseResolverBase } from "./base/newCourse.resolver.base";
import { NewCourse } from "./base/NewCourse";
import { NewCourseService } from "./newCourse.service";

@graphql.Resolver(() => NewCourse)
export class NewCourseResolver extends NewCourseResolverBase {
  constructor(protected readonly service: NewCourseService) {
    super(service);
  }
}
