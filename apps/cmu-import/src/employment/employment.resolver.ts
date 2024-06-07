import * as graphql from "@nestjs/graphql";
import { EmploymentResolverBase } from "./base/employment.resolver.base";
import { Employment } from "./base/Employment";
import { EmploymentService } from "./employment.service";

@graphql.Resolver(() => Employment)
export class EmploymentResolver extends EmploymentResolverBase {
  constructor(protected readonly service: EmploymentService) {
    super(service);
  }
}
