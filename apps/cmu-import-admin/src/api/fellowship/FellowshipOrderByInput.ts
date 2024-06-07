import { SortOrder } from "../../util/SortOrder";

export type FellowshipOrderByInput = {
  amount?: SortOrder;
  amountSemester?: SortOrder;
  beginDate?: SortOrder;
  duration?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  pending?: SortOrder;
  student_id?: SortOrder;
  title?: SortOrder;
};
