import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InstitutionService } from "./institution.service";
import { InstitutionControllerBase } from "./base/institution.controller.base";

@swagger.ApiTags("institutions")
@common.Controller("institutions")
export class InstitutionController extends InstitutionControllerBase {
  constructor(protected readonly service: InstitutionService) {
    super(service);
  }
}
