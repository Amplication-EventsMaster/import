import * as graphql from "@nestjs/graphql";
import { InstituteResolverBase } from "./base/institute.resolver.base";
import { Institute } from "./base/Institute";
import { InstituteService } from "./institute.service";

@graphql.Resolver(() => Institute)
export class InstituteResolver extends InstituteResolverBase {
  constructor(protected readonly service: InstituteService) {
    super(service);
  }
}
