import * as graphql from "@nestjs/graphql";
import { InternshipsIsrmResolverBase } from "./base/internshipsIsrm.resolver.base";
import { InternshipsIsrm } from "./base/InternshipsIsrm";
import { InternshipsIsrmService } from "./internshipsIsrm.service";

@graphql.Resolver(() => InternshipsIsrm)
export class InternshipsIsrmResolver extends InternshipsIsrmResolverBase {
  constructor(protected readonly service: InternshipsIsrmService) {
    super(service);
  }
}
