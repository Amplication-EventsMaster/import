import { Report } from "../report/Report";

export type ReportDeptVisibility = {
  department: string;
  id: number;
  reports?: Report;
  visible: number;
};
