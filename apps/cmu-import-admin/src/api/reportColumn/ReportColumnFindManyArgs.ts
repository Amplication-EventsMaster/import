import { ReportColumnWhereInput } from "./ReportColumnWhereInput";
import { ReportColumnOrderByInput } from "./ReportColumnOrderByInput";

export type ReportColumnFindManyArgs = {
  where?: ReportColumnWhereInput;
  orderBy?: Array<ReportColumnOrderByInput>;
  skip?: number;
  take?: number;
};
