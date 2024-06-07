import { StudentInstitute as TStudentInstitute } from "../api/studentInstitute/StudentInstitute";

export const STUDENTINSTITUTE_TITLE_FIELD = "institutesName";

export const StudentInstituteTitle = (record: TStudentInstitute): string => {
  return record.institutesName?.toString() || String(record.id);
};
