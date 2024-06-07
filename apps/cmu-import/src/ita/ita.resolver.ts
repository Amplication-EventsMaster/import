import * as graphql from "@nestjs/graphql";
import { ItaResolverBase } from "./base/ita.resolver.base";
import { Ita } from "./base/Ita";
import { ItaService } from "./ita.service";

@graphql.Resolver(() => Ita)
export class ItaResolver extends ItaResolverBase {
  constructor(protected readonly service: ItaService) {
    super(service);
  }
}
