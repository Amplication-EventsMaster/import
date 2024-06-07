import { ReportWhereUniqueInput } from "../report/ReportWhereUniqueInput";

export type ReportColumnUpdateInput = {
  columnFormat?: string | null;
  columnName?: string | null;
  columnSortable?: number;
  columnTitle?: string | null;
  reports?: ReportWhereUniqueInput;
  sortOrder?: number | null;
};
