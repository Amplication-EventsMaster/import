export type NewCourseCreateInput = {
  courseNum?: string | null;
  courseSection?: string | null;
  department?: string | null;
  departmentCode?: string | null;
  shortTitle?: string | null;
  title?: string | null;
  units: number;
};
