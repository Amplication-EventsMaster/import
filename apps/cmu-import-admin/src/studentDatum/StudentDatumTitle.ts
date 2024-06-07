import { StudentDatum as TStudentDatum } from "../api/studentDatum/StudentDatum";

export const STUDENTDATUM_TITLE_FIELD = "institutesName";

export const StudentDatumTitle = (record: TStudentDatum): string => {
  return record.institutesName?.toString() || String(record.id);
};
