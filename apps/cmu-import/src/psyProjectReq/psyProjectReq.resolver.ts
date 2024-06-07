import * as graphql from "@nestjs/graphql";
import { PsyProjectReqResolverBase } from "./base/psyProjectReq.resolver.base";
import { PsyProjectReq } from "./base/PsyProjectReq";
import { PsyProjectReqService } from "./psyProjectReq.service";

@graphql.Resolver(() => PsyProjectReq)
export class PsyProjectReqResolver extends PsyProjectReqResolverBase {
  constructor(protected readonly service: PsyProjectReqService) {
    super(service);
  }
}
