import * as graphql from "@nestjs/graphql";
import { PracticumResolverBase } from "./base/practicum.resolver.base";
import { Practicum } from "./base/Practicum";
import { PracticumService } from "./practicum.service";

@graphql.Resolver(() => Practicum)
export class PracticumResolver extends PracticumResolverBase {
  constructor(protected readonly service: PracticumService) {
    super(service);
  }
}
