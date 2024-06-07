import * as graphql from "@nestjs/graphql";
import { GeneralDatumResolverBase } from "./base/generalDatum.resolver.base";
import { GeneralDatum } from "./base/GeneralDatum";
import { GeneralDatumService } from "./generalDatum.service";

@graphql.Resolver(() => GeneralDatum)
export class GeneralDatumResolver extends GeneralDatumResolverBase {
  constructor(protected readonly service: GeneralDatumService) {
    super(service);
  }
}
