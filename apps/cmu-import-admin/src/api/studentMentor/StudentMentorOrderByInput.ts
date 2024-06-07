import { SortOrder } from "../../util/SortOrder";

export type StudentMentorOrderByInput = {
  consultant?: SortOrder;
  current?: SortOrder;
  endDate?: SortOrder;
  facultyId?: SortOrder;
  id?: SortOrder;
  startDate?: SortOrder;
  student_id?: SortOrder;
};
