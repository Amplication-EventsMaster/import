import { StudentCourse as TStudentCourse } from "../api/studentCourse/StudentCourse";

export const STUDENTCOURSE_TITLE_FIELD = "shortTitle";

export const StudentCourseTitle = (record: TStudentCourse): string => {
  return record.shortTitle?.toString() || String(record.id);
};
