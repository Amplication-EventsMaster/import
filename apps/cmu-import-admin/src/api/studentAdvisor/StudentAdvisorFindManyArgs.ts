import { StudentAdvisorWhereInput } from "./StudentAdvisorWhereInput";
import { StudentAdvisorOrderByInput } from "./StudentAdvisorOrderByInput";

export type StudentAdvisorFindManyArgs = {
  where?: StudentAdvisorWhereInput;
  orderBy?: Array<StudentAdvisorOrderByInput>;
  skip?: number;
  take?: number;
};
