import * as graphql from "@nestjs/graphql";
import { CourseDepartmentResolverBase } from "./base/courseDepartment.resolver.base";
import { CourseDepartment } from "./base/CourseDepartment";
import { CourseDepartmentService } from "./courseDepartment.service";

@graphql.Resolver(() => CourseDepartment)
export class CourseDepartmentResolver extends CourseDepartmentResolverBase {
  constructor(protected readonly service: CourseDepartmentService) {
    super(service);
  }
}
