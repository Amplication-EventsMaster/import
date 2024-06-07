import * as graphql from "@nestjs/graphql";
import { ExpNeuroReqResolverBase } from "./base/expNeuroReq.resolver.base";
import { ExpNeuroReq } from "./base/ExpNeuroReq";
import { ExpNeuroReqService } from "./expNeuroReq.service";

@graphql.Resolver(() => ExpNeuroReq)
export class ExpNeuroReqResolver extends ExpNeuroReqResolverBase {
  constructor(protected readonly service: ExpNeuroReqService) {
    super(service);
  }
}
