import * as graphql from "@nestjs/graphql";
import { AreaResolverBase } from "./base/area.resolver.base";
import { Area } from "./base/Area";
import { AreaService } from "./area.service";

@graphql.Resolver(() => Area)
export class AreaResolver extends AreaResolverBase {
  constructor(protected readonly service: AreaService) {
    super(service);
  }
}
