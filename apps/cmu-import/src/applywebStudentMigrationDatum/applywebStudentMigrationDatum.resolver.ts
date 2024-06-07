import * as graphql from "@nestjs/graphql";
import { ApplywebStudentMigrationDatumResolverBase } from "./base/applywebStudentMigrationDatum.resolver.base";
import { ApplywebStudentMigrationDatum } from "./base/ApplywebStudentMigrationDatum";
import { ApplywebStudentMigrationDatumService } from "./applywebStudentMigrationDatum.service";

@graphql.Resolver(() => ApplywebStudentMigrationDatum)
export class ApplywebStudentMigrationDatumResolver extends ApplywebStudentMigrationDatumResolverBase {
  constructor(
    protected readonly service: ApplywebStudentMigrationDatumService
  ) {
    super(service);
  }
}
