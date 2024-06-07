import { SemesterDate as TSemesterDate } from "../api/semesterDate/SemesterDate";

export const SEMESTERDATE_TITLE_FIELD = "department";

export const SemesterDateTitle = (record: TSemesterDate): string => {
  return record.department?.toString() || String(record.id);
};
