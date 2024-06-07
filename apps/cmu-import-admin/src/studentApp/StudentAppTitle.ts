import { StudentApp as TStudentApp } from "../api/studentApp/StudentApp";

export const STUDENTAPP_TITLE_FIELD = "id";

export const StudentAppTitle = (record: TStudentApp): string => {
  return record.id?.toString() || String(record.id);
};
