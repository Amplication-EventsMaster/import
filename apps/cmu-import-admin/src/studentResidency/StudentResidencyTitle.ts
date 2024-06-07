import { StudentResidency as TStudentResidency } from "../api/studentResidency/StudentResidency";

export const STUDENTRESIDENCY_TITLE_FIELD = "id";

export const StudentResidencyTitle = (record: TStudentResidency): string => {
  return record.id?.toString() || String(record.id);
};
