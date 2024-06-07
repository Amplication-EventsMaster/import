import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PracticumService } from "./practicum.service";
import { PracticumControllerBase } from "./base/practicum.controller.base";

@swagger.ApiTags("practicums")
@common.Controller("practicums")
export class PracticumController extends PracticumControllerBase {
  constructor(protected readonly service: PracticumService) {
    super(service);
  }
}
