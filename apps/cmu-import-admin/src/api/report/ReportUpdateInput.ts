import { ReportColumnUpdateManyWithoutReportsInput } from "./ReportColumnUpdateManyWithoutReportsInput";
import { ReportDeptVisibilityUpdateManyWithoutReportsInput } from "./ReportDeptVisibilityUpdateManyWithoutReportsInput";

export type ReportUpdateInput = {
  reportColumns?: ReportColumnUpdateManyWithoutReportsInput;
  reportDeptVisibility?: ReportDeptVisibilityUpdateManyWithoutReportsInput;
  reportQuery?: string | null;
  reportTitle?: string | null;
};
