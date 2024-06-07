import * as graphql from "@nestjs/graphql";
import { FacultyDatumResolverBase } from "./base/facultyDatum.resolver.base";
import { FacultyDatum } from "./base/FacultyDatum";
import { FacultyDatumService } from "./facultyDatum.service";

@graphql.Resolver(() => FacultyDatum)
export class FacultyDatumResolver extends FacultyDatumResolverBase {
  constructor(protected readonly service: FacultyDatumService) {
    super(service);
  }
}
