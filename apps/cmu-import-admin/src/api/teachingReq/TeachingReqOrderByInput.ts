import { SortOrder } from "../../util/SortOrder";

export type TeachingReqOrderByInput = {
  complete?: SortOrder;
  courseNum?: SortOrder;
  courseSection?: SortOrder;
  date?: SortOrder;
  departmentCode?: SortOrder;
  id?: SortOrder;
  pending?: SortOrder;
  status?: SortOrder;
  student_id?: SortOrder;
  title?: SortOrder;
  units?: SortOrder;
};
