import { SortOrder } from "../../util/SortOrder";

export type StudentCourseOrderByInput = {
  applicable?: SortOrder;
  courseNum?: SortOrder;
  courseSection?: SortOrder;
  customLabel?: SortOrder;
  date?: SortOrder;
  departmentCode?: SortOrder;
  grade?: SortOrder;
  id?: SortOrder;
  midtermGrade?: SortOrder;
  note?: SortOrder;
  qpoints?: SortOrder;
  requirementType?: SortOrder;
  shortTitle?: SortOrder;
  studentId?: SortOrder;
  title?: SortOrder;
  transfercredit?: SortOrder;
  units?: SortOrder;
};
