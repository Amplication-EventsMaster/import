import * as graphql from "@nestjs/graphql";
import { TeachingReqResolverBase } from "./base/teachingReq.resolver.base";
import { TeachingReq } from "./base/TeachingReq";
import { TeachingReqService } from "./teachingReq.service";

@graphql.Resolver(() => TeachingReq)
export class TeachingReqResolver extends TeachingReqResolverBase {
  constructor(protected readonly service: TeachingReqService) {
    super(service);
  }
}
