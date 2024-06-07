import * as graphql from "@nestjs/graphql";
import { InternshipResolverBase } from "./base/internship.resolver.base";
import { Internship } from "./base/Internship";
import { InternshipService } from "./internship.service";

@graphql.Resolver(() => Internship)
export class InternshipResolver extends InternshipResolverBase {
  constructor(protected readonly service: InternshipService) {
    super(service);
  }
}
