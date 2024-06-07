import { ApplywebApplication as TApplywebApplication } from "../api/applywebApplication/ApplywebApplication";

export const APPLYWEBAPPLICATION_TITLE_FIELD = "studentNameFirst";

export const ApplywebApplicationTitle = (
  record: TApplywebApplication
): string => {
  return record.studentNameFirst?.toString() || String(record.id);
};
