import * as graphql from "@nestjs/graphql";
import { StudentDataHciiResolverBase } from "./base/studentDataHcii.resolver.base";
import { StudentDataHcii } from "./base/StudentDataHcii";
import { StudentDataHciiService } from "./studentDataHcii.service";

@graphql.Resolver(() => StudentDataHcii)
export class StudentDataHciiResolver extends StudentDataHciiResolverBase {
  constructor(protected readonly service: StudentDataHciiService) {
    super(service);
  }
}
