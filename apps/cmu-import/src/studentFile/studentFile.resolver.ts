import * as graphql from "@nestjs/graphql";
import { StudentFileResolverBase } from "./base/studentFile.resolver.base";
import { StudentFile } from "./base/StudentFile";
import { StudentFileService } from "./studentFile.service";

@graphql.Resolver(() => StudentFile)
export class StudentFileResolver extends StudentFileResolverBase {
  constructor(protected readonly service: StudentFileService) {
    super(service);
  }
}
