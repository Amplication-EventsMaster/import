import { Course as TCourse } from "../api/course/Course";

export const COURSE_TITLE_FIELD = "shortTitle";

export const CourseTitle = (record: TCourse): string => {
  return record.shortTitle?.toString() || String(record.id);
};
