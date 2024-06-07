import * as graphql from "@nestjs/graphql";
import { StudentDocumentResolverBase } from "./base/studentDocument.resolver.base";
import { StudentDocument } from "./base/StudentDocument";
import { StudentDocumentService } from "./studentDocument.service";

@graphql.Resolver(() => StudentDocument)
export class StudentDocumentResolver extends StudentDocumentResolverBase {
  constructor(protected readonly service: StudentDocumentService) {
    super(service);
  }
}
