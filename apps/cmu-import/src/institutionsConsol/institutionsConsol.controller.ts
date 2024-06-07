import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InstitutionsConsolService } from "./institutionsConsol.service";
import { InstitutionsConsolControllerBase } from "./base/institutionsConsol.controller.base";

@swagger.ApiTags("institutionsConsols")
@common.Controller("institutionsConsols")
export class InstitutionsConsolController extends InstitutionsConsolControllerBase {
  constructor(protected readonly service: InstitutionsConsolService) {
    super(service);
  }
}
