import * as graphql from "@nestjs/graphql";
import { RotationResolverBase } from "./base/rotation.resolver.base";
import { Rotation } from "./base/Rotation";
import { RotationService } from "./rotation.service";

@graphql.Resolver(() => Rotation)
export class RotationResolver extends RotationResolverBase {
  constructor(protected readonly service: RotationService) {
    super(service);
  }
}
