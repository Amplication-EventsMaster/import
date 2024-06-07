import { StudentCommitteeMeeting as TStudentCommitteeMeeting } from "../api/studentCommitteeMeeting/StudentCommitteeMeeting";

export const STUDENTCOMMITTEEMEETING_TITLE_FIELD = "id";

export const StudentCommitteeMeetingTitle = (
  record: TStudentCommitteeMeeting
): string => {
  return record.id?.toString() || String(record.id);
};
