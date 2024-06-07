import { SortOrder } from "../../util/SortOrder";

export type CommitteeServiceOrderByInput = {
  committeeName?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  startDate?: SortOrder;
  student_id?: SortOrder;
};
