import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LeadershipService } from "./leadership.service";
import { LeadershipControllerBase } from "./base/leadership.controller.base";

@swagger.ApiTags("leaderships")
@common.Controller("leaderships")
export class LeadershipController extends LeadershipControllerBase {
  constructor(protected readonly service: LeadershipService) {
    super(service);
  }
}
