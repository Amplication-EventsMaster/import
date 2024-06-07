import * as graphql from "@nestjs/graphql";
import { StudentOverrideResolverBase } from "./base/studentOverride.resolver.base";
import { StudentOverride } from "./base/StudentOverride";
import { StudentOverrideService } from "./studentOverride.service";

@graphql.Resolver(() => StudentOverride)
export class StudentOverrideResolver extends StudentOverrideResolverBase {
  constructor(protected readonly service: StudentOverrideService) {
    super(service);
  }
}
