import { SortOrder } from "../../util/SortOrder";

export type CourseOrderByInput = {
  courseNum?: SortOrder;
  courseSection?: SortOrder;
  department?: SortOrder;
  departmentCode?: SortOrder;
  id?: SortOrder;
  shortTitle?: SortOrder;
  title?: SortOrder;
  units?: SortOrder;
};
