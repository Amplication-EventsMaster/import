import * as graphql from "@nestjs/graphql";
import { StudentResidencyResolverBase } from "./base/studentResidency.resolver.base";
import { StudentResidency } from "./base/StudentResidency";
import { StudentResidencyService } from "./studentResidency.service";

@graphql.Resolver(() => StudentResidency)
export class StudentResidencyResolver extends StudentResidencyResolverBase {
  constructor(protected readonly service: StudentResidencyService) {
    super(service);
  }
}
