import * as graphql from "@nestjs/graphql";
import { StudentDatumResolverBase } from "./base/studentDatum.resolver.base";
import { StudentDatum } from "./base/StudentDatum";
import { StudentDatumService } from "./studentDatum.service";

@graphql.Resolver(() => StudentDatum)
export class StudentDatumResolver extends StudentDatumResolverBase {
  constructor(protected readonly service: StudentDatumService) {
    super(service);
  }
}
