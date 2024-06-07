import * as graphql from "@nestjs/graphql";
import { RawDatumResolverBase } from "./base/rawDatum.resolver.base";
import { RawDatum } from "./base/RawDatum";
import { RawDatumService } from "./rawDatum.service";

@graphql.Resolver(() => RawDatum)
export class RawDatumResolver extends RawDatumResolverBase {
  constructor(protected readonly service: RawDatumService) {
    super(service);
  }
}
