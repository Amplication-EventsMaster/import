import { ReportColumn } from "../reportColumn/ReportColumn";
import { ReportDeptVisibility } from "../reportDeptVisibility/ReportDeptVisibility";

export type Report = {
  id: number;
  reportColumns?: Array<ReportColumn>;
  reportDeptVisibility?: Array<ReportDeptVisibility>;
  reportQuery: string | null;
  reportTitle: string | null;
};
