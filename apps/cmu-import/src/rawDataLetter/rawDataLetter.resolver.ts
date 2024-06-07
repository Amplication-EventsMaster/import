import * as graphql from "@nestjs/graphql";
import { RawDataLetterResolverBase } from "./base/rawDataLetter.resolver.base";
import { RawDataLetter } from "./base/RawDataLetter";
import { RawDataLetterService } from "./rawDataLetter.service";

@graphql.Resolver(() => RawDataLetter)
export class RawDataLetterResolver extends RawDataLetterResolverBase {
  constructor(protected readonly service: RawDataLetterService) {
    super(service);
  }
}
