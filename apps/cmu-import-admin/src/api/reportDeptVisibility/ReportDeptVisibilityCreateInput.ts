import { ReportWhereUniqueInput } from "../report/ReportWhereUniqueInput";

export type ReportDeptVisibilityCreateInput = {
  department: string;
  reports: ReportWhereUniqueInput;
  visible: number;
};
