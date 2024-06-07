import { StudentDataHcii as TStudentDataHcii } from "../api/studentDataHcii/StudentDataHcii";

export const STUDENTDATAHCII_TITLE_FIELD = "id";

export const StudentDataHciiTitle = (record: TStudentDataHcii): string => {
  return record.id?.toString() || String(record.id);
};
