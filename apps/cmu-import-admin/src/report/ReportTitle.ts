import { Report as TReport } from "../api/report/Report";

export const REPORT_TITLE_FIELD = "reportTitle";

export const ReportTitle = (record: TReport): string => {
  return record.reportTitle?.toString() || String(record.id);
};
