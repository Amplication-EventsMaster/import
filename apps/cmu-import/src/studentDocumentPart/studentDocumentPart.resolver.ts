import * as graphql from "@nestjs/graphql";
import { StudentDocumentPartResolverBase } from "./base/studentDocumentPart.resolver.base";
import { StudentDocumentPart } from "./base/StudentDocumentPart";
import { StudentDocumentPartService } from "./studentDocumentPart.service";

@graphql.Resolver(() => StudentDocumentPart)
export class StudentDocumentPartResolver extends StudentDocumentPartResolverBase {
  constructor(protected readonly service: StudentDocumentPartService) {
    super(service);
  }
}
