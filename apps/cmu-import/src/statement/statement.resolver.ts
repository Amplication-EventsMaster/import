import * as graphql from "@nestjs/graphql";
import { StatementResolverBase } from "./base/statement.resolver.base";
import { Statement } from "./base/Statement";
import { StatementService } from "./statement.service";

@graphql.Resolver(() => Statement)
export class StatementResolver extends StatementResolverBase {
  constructor(protected readonly service: StatementService) {
    super(service);
  }
}
