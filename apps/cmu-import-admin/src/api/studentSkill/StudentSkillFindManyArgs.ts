import { StudentSkillWhereInput } from "./StudentSkillWhereInput";
import { StudentSkillOrderByInput } from "./StudentSkillOrderByInput";

export type StudentSkillFindManyArgs = {
  where?: StudentSkillWhereInput;
  orderBy?: Array<StudentSkillOrderByInput>;
  skip?: number;
  take?: number;
};
