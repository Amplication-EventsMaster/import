import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DepartmentSignatureImageService } from "./departmentSignatureImage.service";
import { DepartmentSignatureImageControllerBase } from "./base/departmentSignatureImage.controller.base";

@swagger.ApiTags("departmentSignatureImages")
@common.Controller("departmentSignatureImages")
export class DepartmentSignatureImageController extends DepartmentSignatureImageControllerBase {
  constructor(protected readonly service: DepartmentSignatureImageService) {
    super(service);
  }
}
