import * as graphql from "@nestjs/graphql";
import { InternshipsCdResolverBase } from "./base/internshipsCd.resolver.base";
import { InternshipsCd } from "./base/InternshipsCd";
import { InternshipsCdService } from "./internshipsCd.service";

@graphql.Resolver(() => InternshipsCd)
export class InternshipsCdResolver extends InternshipsCdResolverBase {
  constructor(protected readonly service: InternshipsCdService) {
    super(service);
  }
}
