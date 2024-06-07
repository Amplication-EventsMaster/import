import * as graphql from "@nestjs/graphql";
import { StudentInstituteResolverBase } from "./base/studentInstitute.resolver.base";
import { StudentInstitute } from "./base/StudentInstitute";
import { StudentInstituteService } from "./studentInstitute.service";

@graphql.Resolver(() => StudentInstitute)
export class StudentInstituteResolver extends StudentInstituteResolverBase {
  constructor(protected readonly service: StudentInstituteService) {
    super(service);
  }
}
