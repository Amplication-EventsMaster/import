import * as graphql from "@nestjs/graphql";
import { StudentAdvisorResolverBase } from "./base/studentAdvisor.resolver.base";
import { StudentAdvisor } from "./base/StudentAdvisor";
import { StudentAdvisorService } from "./studentAdvisor.service";

@graphql.Resolver(() => StudentAdvisor)
export class StudentAdvisorResolver extends StudentAdvisorResolverBase {
  constructor(protected readonly service: StudentAdvisorService) {
    super(service);
  }
}
