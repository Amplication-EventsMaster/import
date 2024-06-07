import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StudentAppService } from "./studentApp.service";
import { StudentAppControllerBase } from "./base/studentApp.controller.base";

@swagger.ApiTags("studentApps")
@common.Controller("studentApps")
export class StudentAppController extends StudentAppControllerBase {
  constructor(protected readonly service: StudentAppService) {
    super(service);
  }
}
