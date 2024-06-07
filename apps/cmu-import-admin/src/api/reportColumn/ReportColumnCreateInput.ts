import { ReportWhereUniqueInput } from "../report/ReportWhereUniqueInput";

export type ReportColumnCreateInput = {
  columnFormat?: string | null;
  columnName?: string | null;
  columnSortable: number;
  columnTitle?: string | null;
  reports: ReportWhereUniqueInput;
  sortOrder?: number | null;
};
