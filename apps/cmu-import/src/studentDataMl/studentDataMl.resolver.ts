import * as graphql from "@nestjs/graphql";
import { StudentDataMlResolverBase } from "./base/studentDataMl.resolver.base";
import { StudentDataMl } from "./base/StudentDataMl";
import { StudentDataMlService } from "./studentDataMl.service";

@graphql.Resolver(() => StudentDataMl)
export class StudentDataMlResolver extends StudentDataMlResolverBase {
  constructor(protected readonly service: StudentDataMlService) {
    super(service);
  }
}
