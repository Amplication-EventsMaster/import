import { StudentDataMl as TStudentDataMl } from "../api/studentDataMl/StudentDataMl";

export const STUDENTDATAML_TITLE_FIELD = "origDepartment";

export const StudentDataMlTitle = (record: TStudentDataMl): string => {
  return record.origDepartment?.toString() || String(record.id);
};
