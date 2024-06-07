import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DepartmentSignatureService } from "./departmentSignature.service";
import { DepartmentSignatureControllerBase } from "./base/departmentSignature.controller.base";

@swagger.ApiTags("departmentSignatures")
@common.Controller("departmentSignatures")
export class DepartmentSignatureController extends DepartmentSignatureControllerBase {
  constructor(protected readonly service: DepartmentSignatureService) {
    super(service);
  }
}
