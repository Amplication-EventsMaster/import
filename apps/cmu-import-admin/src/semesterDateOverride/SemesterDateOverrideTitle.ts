import { SemesterDateOverride as TSemesterDateOverride } from "../api/semesterDateOverride/SemesterDateOverride";

export const SEMESTERDATEOVERRIDE_TITLE_FIELD = "department";

export const SemesterDateOverrideTitle = (
  record: TSemesterDateOverride
): string => {
  return record.department?.toString() || String(record.id);
};
