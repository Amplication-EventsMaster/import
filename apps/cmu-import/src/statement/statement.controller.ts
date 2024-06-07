import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StatementService } from "./statement.service";
import { StatementControllerBase } from "./base/statement.controller.base";

@swagger.ApiTags("statements")
@common.Controller("statements")
export class StatementController extends StatementControllerBase {
  constructor(protected readonly service: StatementService) {
    super(service);
  }
}
