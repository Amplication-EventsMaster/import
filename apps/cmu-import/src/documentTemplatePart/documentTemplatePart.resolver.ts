import * as graphql from "@nestjs/graphql";
import { DocumentTemplatePartResolverBase } from "./base/documentTemplatePart.resolver.base";
import { DocumentTemplatePart } from "./base/DocumentTemplatePart";
import { DocumentTemplatePartService } from "./documentTemplatePart.service";

@graphql.Resolver(() => DocumentTemplatePart)
export class DocumentTemplatePartResolver extends DocumentTemplatePartResolverBase {
  constructor(protected readonly service: DocumentTemplatePartService) {
    super(service);
  }
}
