import * as graphql from "@nestjs/graphql";
import { InternshipsIniResolverBase } from "./base/internshipsIni.resolver.base";
import { InternshipsIni } from "./base/InternshipsIni";
import { InternshipsIniService } from "./internshipsIni.service";

@graphql.Resolver(() => InternshipsIni)
export class InternshipsIniResolver extends InternshipsIniResolverBase {
  constructor(protected readonly service: InternshipsIniService) {
    super(service);
  }
}
