import * as graphql from "@nestjs/graphql";
import { IccResolverBase } from "./base/icc.resolver.base";
import { Icc } from "./base/Icc";
import { IccService } from "./icc.service";

@graphql.Resolver(() => Icc)
export class IccResolver extends IccResolverBase {
  constructor(protected readonly service: IccService) {
    super(service);
  }
}
