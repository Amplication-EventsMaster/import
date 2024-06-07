import { Report } from "../report/Report";

export type ReportColumn = {
  columnFormat: string | null;
  columnName: string | null;
  columnSortable: number;
  columnTitle: string | null;
  id: number;
  reports?: Report;
  sortOrder: number | null;
};
