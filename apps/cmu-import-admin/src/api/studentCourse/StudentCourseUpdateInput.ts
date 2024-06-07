export type StudentCourseUpdateInput = {
  applicable?: string;
  courseNum?: string | null;
  courseSection?: string | null;
  customLabel?: string | null;
  date?: Date | null;
  departmentCode?: string | null;
  grade?: string | null;
  midtermGrade?: string | null;
  note?: string | null;
  qpoints?: number | null;
  requirementType?: string;
  shortTitle?: string | null;
  studentId?: number | null;
  title?: string | null;
  transfercredit?: number | null;
  units?: string | null;
};
