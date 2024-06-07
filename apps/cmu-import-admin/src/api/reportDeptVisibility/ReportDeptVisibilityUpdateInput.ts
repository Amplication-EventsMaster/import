import { ReportWhereUniqueInput } from "../report/ReportWhereUniqueInput";

export type ReportDeptVisibilityUpdateInput = {
  department?: string;
  reports?: ReportWhereUniqueInput;
  visible?: number;
};
