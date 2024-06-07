import { StudentAdvisor as TStudentAdvisor } from "../api/studentAdvisor/StudentAdvisor";

export const STUDENTADVISOR_TITLE_FIELD = "id";

export const StudentAdvisorTitle = (record: TStudentAdvisor): string => {
  return record.id?.toString() || String(record.id);
};
