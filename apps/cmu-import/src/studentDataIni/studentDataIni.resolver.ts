import * as graphql from "@nestjs/graphql";
import { StudentDataIniResolverBase } from "./base/studentDataIni.resolver.base";
import { StudentDataIni } from "./base/StudentDataIni";
import { StudentDataIniService } from "./studentDataIni.service";

@graphql.Resolver(() => StudentDataIni)
export class StudentDataIniResolver extends StudentDataIniResolverBase {
  constructor(protected readonly service: StudentDataIniService) {
    super(service);
  }
}
