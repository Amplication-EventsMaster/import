import * as graphql from "@nestjs/graphql";
import { AgendaResolverBase } from "./base/agenda.resolver.base";
import { Agenda } from "./base/Agenda";
import { AgendaService } from "./agenda.service";

@graphql.Resolver(() => Agenda)
export class AgendaResolver extends AgendaResolverBase {
  constructor(protected readonly service: AgendaService) {
    super(service);
  }
}
