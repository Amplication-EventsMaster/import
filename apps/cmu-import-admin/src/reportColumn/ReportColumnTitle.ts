import { ReportColumn as TReportColumn } from "../api/reportColumn/ReportColumn";

export const REPORTCOLUMN_TITLE_FIELD = "columnName";

export const ReportColumnTitle = (record: TReportColumn): string => {
  return record.columnName?.toString() || String(record.id);
};
