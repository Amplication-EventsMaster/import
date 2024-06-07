import * as graphql from "@nestjs/graphql";
import { StudentMentorResolverBase } from "./base/studentMentor.resolver.base";
import { StudentMentor } from "./base/StudentMentor";
import { StudentMentorService } from "./studentMentor.service";

@graphql.Resolver(() => StudentMentor)
export class StudentMentorResolver extends StudentMentorResolverBase {
  constructor(protected readonly service: StudentMentorService) {
    super(service);
  }
}
