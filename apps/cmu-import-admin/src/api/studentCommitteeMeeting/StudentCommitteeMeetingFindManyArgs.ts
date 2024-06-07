import { StudentCommitteeMeetingWhereInput } from "./StudentCommitteeMeetingWhereInput";
import { StudentCommitteeMeetingOrderByInput } from "./StudentCommitteeMeetingOrderByInput";

export type StudentCommitteeMeetingFindManyArgs = {
  where?: StudentCommitteeMeetingWhereInput;
  orderBy?: Array<StudentCommitteeMeetingOrderByInput>;
  skip?: number;
  take?: number;
};
