import { SemesterReference as TSemesterReference } from "../api/semesterReference/SemesterReference";

export const SEMESTERREFERENCE_TITLE_FIELD = "refName";

export const SemesterReferenceTitle = (record: TSemesterReference): string => {
  return record.refName?.toString() || String(record.id);
};
