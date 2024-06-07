import * as graphql from "@nestjs/graphql";
import { AgendaItemResolverBase } from "./base/agendaItem.resolver.base";
import { AgendaItem } from "./base/AgendaItem";
import { AgendaItemService } from "./agendaItem.service";

@graphql.Resolver(() => AgendaItem)
export class AgendaItemResolver extends AgendaItemResolverBase {
  constructor(protected readonly service: AgendaItemService) {
    super(service);
  }
}
