import * as graphql from "@nestjs/graphql";
import { SemesterDateResolverBase } from "./base/semesterDate.resolver.base";
import { SemesterDate } from "./base/SemesterDate";
import { SemesterDateService } from "./semesterDate.service";

@graphql.Resolver(() => SemesterDate)
export class SemesterDateResolver extends SemesterDateResolverBase {
  constructor(protected readonly service: SemesterDateService) {
    super(service);
  }
}
