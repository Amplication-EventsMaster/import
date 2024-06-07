import { StudentOverride as TStudentOverride } from "../api/studentOverride/StudentOverride";

export const STUDENTOVERRIDE_TITLE_FIELD = "requirement";

export const StudentOverrideTitle = (record: TStudentOverride): string => {
  return record.requirement?.toString() || String(record.id);
};
