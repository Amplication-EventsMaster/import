import * as graphql from "@nestjs/graphql";
import { SemesterReferenceResolverBase } from "./base/semesterReference.resolver.base";
import { SemesterReference } from "./base/SemesterReference";
import { SemesterReferenceService } from "./semesterReference.service";

@graphql.Resolver(() => SemesterReference)
export class SemesterReferenceResolver extends SemesterReferenceResolverBase {
  constructor(protected readonly service: SemesterReferenceService) {
    super(service);
  }
}
