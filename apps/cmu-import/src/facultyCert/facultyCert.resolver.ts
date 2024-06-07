import * as graphql from "@nestjs/graphql";
import { FacultyCertResolverBase } from "./base/facultyCert.resolver.base";
import { FacultyCert } from "./base/FacultyCert";
import { FacultyCertService } from "./facultyCert.service";

@graphql.Resolver(() => FacultyCert)
export class FacultyCertResolver extends FacultyCertResolverBase {
  constructor(protected readonly service: FacultyCertService) {
    super(service);
  }
}
