import * as graphql from "@nestjs/graphql";
import { SemesterDateOverrideResolverBase } from "./base/semesterDateOverride.resolver.base";
import { SemesterDateOverride } from "./base/SemesterDateOverride";
import { SemesterDateOverrideService } from "./semesterDateOverride.service";

@graphql.Resolver(() => SemesterDateOverride)
export class SemesterDateOverrideResolver extends SemesterDateOverrideResolverBase {
  constructor(protected readonly service: SemesterDateOverrideService) {
    super(service);
  }
}
