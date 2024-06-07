import { ReportDeptVisibility as TReportDeptVisibility } from "../api/reportDeptVisibility/ReportDeptVisibility";

export const REPORTDEPTVISIBILITY_TITLE_FIELD = "department";

export const ReportDeptVisibilityTitle = (
  record: TReportDeptVisibility
): string => {
  return record.department?.toString() || String(record.id);
};
