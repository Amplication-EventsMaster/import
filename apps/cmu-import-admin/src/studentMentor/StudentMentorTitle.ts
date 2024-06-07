import { StudentMentor as TStudentMentor } from "../api/studentMentor/StudentMentor";

export const STUDENTMENTOR_TITLE_FIELD = "id";

export const StudentMentorTitle = (record: TStudentMentor): string => {
  return record.id?.toString() || String(record.id);
};
