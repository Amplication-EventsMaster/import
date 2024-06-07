import { StudentMentorWhereInput } from "./StudentMentorWhereInput";
import { StudentMentorOrderByInput } from "./StudentMentorOrderByInput";

export type StudentMentorFindManyArgs = {
  where?: StudentMentorWhereInput;
  orderBy?: Array<StudentMentorOrderByInput>;
  skip?: number;
  take?: number;
};
