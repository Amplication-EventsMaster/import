import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StudentDocumentPartService } from "./studentDocumentPart.service";
import { StudentDocumentPartControllerBase } from "./base/studentDocumentPart.controller.base";

@swagger.ApiTags("studentDocumentParts")
@common.Controller("studentDocumentParts")
export class StudentDocumentPartController extends StudentDocumentPartControllerBase {
  constructor(protected readonly service: StudentDocumentPartService) {
    super(service);
  }
}
