import * as graphql from "@nestjs/graphql";
import { GreGeneralConvResolverBase } from "./base/greGeneralConv.resolver.base";
import { GreGeneralConv } from "./base/GreGeneralConv";
import { GreGeneralConvService } from "./greGeneralConv.service";

@graphql.Resolver(() => GreGeneralConv)
export class GreGeneralConvResolver extends GreGeneralConvResolverBase {
  constructor(protected readonly service: GreGeneralConvService) {
    super(service);
  }
}
