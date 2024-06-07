import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DocumentTemplatePartService } from "./documentTemplatePart.service";
import { DocumentTemplatePartControllerBase } from "./base/documentTemplatePart.controller.base";

@swagger.ApiTags("documentTemplateParts")
@common.Controller("documentTemplateParts")
export class DocumentTemplatePartController extends DocumentTemplatePartControllerBase {
  constructor(protected readonly service: DocumentTemplatePartService) {
    super(service);
  }
}
