import * as graphql from "@nestjs/graphql";
import { ProgramStatusResolverBase } from "./base/programStatus.resolver.base";
import { ProgramStatus } from "./base/ProgramStatus";
import { ProgramStatusService } from "./programStatus.service";

@graphql.Resolver(() => ProgramStatus)
export class ProgramStatusResolver extends ProgramStatusResolverBase {
  constructor(protected readonly service: ProgramStatusService) {
    super(service);
  }
}
