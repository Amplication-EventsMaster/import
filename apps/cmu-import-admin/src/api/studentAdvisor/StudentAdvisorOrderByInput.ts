import { SortOrder } from "../../util/SortOrder";

export type StudentAdvisorOrderByInput = {
  consultant?: SortOrder;
  current?: SortOrder;
  endDate?: SortOrder;
  facultyId?: SortOrder;
  id?: SortOrder;
  startDate?: SortOrder;
  student_id?: SortOrder;
};
