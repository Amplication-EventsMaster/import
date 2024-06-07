import * as graphql from "@nestjs/graphql";
import { StudentDataRiResolverBase } from "./base/studentDataRi.resolver.base";
import { StudentDataRi } from "./base/StudentDataRi";
import { StudentDataRiService } from "./studentDataRi.service";

@graphql.Resolver(() => StudentDataRi)
export class StudentDataRiResolver extends StudentDataRiResolverBase {
  constructor(protected readonly service: StudentDataRiService) {
    super(service);
  }
}
