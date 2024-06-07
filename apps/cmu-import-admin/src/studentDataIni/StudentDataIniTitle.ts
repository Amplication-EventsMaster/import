import { StudentDataIni as TStudentDataIni } from "../api/studentDataIni/StudentDataIni";

export const STUDENTDATAINI_TITLE_FIELD = "curriculumOption";

export const StudentDataIniTitle = (record: TStudentDataIni): string => {
  return record.curriculumOption?.toString() || String(record.id);
};
