import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InstituteService } from "./institute.service";
import { InstituteControllerBase } from "./base/institute.controller.base";

@swagger.ApiTags("institutes")
@common.Controller("institutes")
export class InstituteController extends InstituteControllerBase {
  constructor(protected readonly service: InstituteService) {
    super(service);
  }
}
