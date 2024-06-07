import * as graphql from "@nestjs/graphql";
import { StudentSkillResolverBase } from "./base/studentSkill.resolver.base";
import { StudentSkill } from "./base/StudentSkill";
import { StudentSkillService } from "./studentSkill.service";

@graphql.Resolver(() => StudentSkill)
export class StudentSkillResolver extends StudentSkillResolverBase {
  constructor(protected readonly service: StudentSkillService) {
    super(service);
  }
}
