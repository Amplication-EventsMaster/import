import * as graphql from "@nestjs/graphql";
import { NewCourseDepartmentResolverBase } from "./base/newCourseDepartment.resolver.base";
import { NewCourseDepartment } from "./base/NewCourseDepartment";
import { NewCourseDepartmentService } from "./newCourseDepartment.service";

@graphql.Resolver(() => NewCourseDepartment)
export class NewCourseDepartmentResolver extends NewCourseDepartmentResolverBase {
  constructor(protected readonly service: NewCourseDepartmentService) {
    super(service);
  }
}
