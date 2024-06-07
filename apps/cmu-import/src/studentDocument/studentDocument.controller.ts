import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StudentDocumentService } from "./studentDocument.service";
import { StudentDocumentControllerBase } from "./base/studentDocument.controller.base";

@swagger.ApiTags("studentDocuments")
@common.Controller("studentDocuments")
export class StudentDocumentController extends StudentDocumentControllerBase {
  constructor(protected readonly service: StudentDocumentService) {
    super(service);
  }
}
