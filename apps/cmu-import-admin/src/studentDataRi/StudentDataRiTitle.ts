import { StudentDataRi as TStudentDataRi } from "../api/studentDataRi/StudentDataRi";

export const STUDENTDATARI_TITLE_FIELD = "id";

export const StudentDataRiTitle = (record: TStudentDataRi): string => {
  return record.id?.toString() || String(record.id);
};
