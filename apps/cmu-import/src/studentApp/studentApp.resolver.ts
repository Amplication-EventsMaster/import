import * as graphql from "@nestjs/graphql";
import { StudentAppResolverBase } from "./base/studentApp.resolver.base";
import { StudentApp } from "./base/StudentApp";
import { StudentAppService } from "./studentApp.service";

@graphql.Resolver(() => StudentApp)
export class StudentAppResolver extends StudentAppResolverBase {
  constructor(protected readonly service: StudentAppService) {
    super(service);
  }
}
