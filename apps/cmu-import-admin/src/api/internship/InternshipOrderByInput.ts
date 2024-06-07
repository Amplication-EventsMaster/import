import { SortOrder } from "../../util/SortOrder";

export type InternshipOrderByInput = {
  company?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  pending?: SortOrder;
  startDate?: SortOrder;
  student_id?: SortOrder;
};
