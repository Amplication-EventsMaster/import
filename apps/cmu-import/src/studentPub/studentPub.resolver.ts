import * as graphql from "@nestjs/graphql";
import { StudentPubResolverBase } from "./base/studentPub.resolver.base";
import { StudentPub } from "./base/StudentPub";
import { StudentPubService } from "./studentPub.service";

@graphql.Resolver(() => StudentPub)
export class StudentPubResolver extends StudentPubResolverBase {
  constructor(protected readonly service: StudentPubService) {
    super(service);
  }
}
