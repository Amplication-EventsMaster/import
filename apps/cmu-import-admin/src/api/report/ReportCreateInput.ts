import { ReportColumnCreateNestedManyWithoutReportsInput } from "./ReportColumnCreateNestedManyWithoutReportsInput";
import { ReportDeptVisibilityCreateNestedManyWithoutReportsInput } from "./ReportDeptVisibilityCreateNestedManyWithoutReportsInput";

export type ReportCreateInput = {
  reportColumns?: ReportColumnCreateNestedManyWithoutReportsInput;
  reportDeptVisibility?: ReportDeptVisibilityCreateNestedManyWithoutReportsInput;
  reportQuery?: string | null;
  reportTitle?: string | null;
};
