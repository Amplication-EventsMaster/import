import { IntFilter } from "../../util/IntFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";

export type StudentCommitteeMeetingWhereInput = {
  id?: IntFilter;
  meetingDate?: DateTimeFilter;
  studentId?: IntFilter;
};
