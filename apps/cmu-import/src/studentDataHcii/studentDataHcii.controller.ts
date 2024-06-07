import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StudentDataHciiService } from "./studentDataHcii.service";
import { StudentDataHciiControllerBase } from "./base/studentDataHcii.controller.base";

@swagger.ApiTags("studentDataHciis")
@common.Controller("studentDataHciis")
export class StudentDataHciiController extends StudentDataHciiControllerBase {
  constructor(protected readonly service: StudentDataHciiService) {
    super(service);
  }
}
