import { NewCourse as TNewCourse } from "../api/newCourse/NewCourse";

export const NEWCOURSE_TITLE_FIELD = "shortTitle";

export const NewCourseTitle = (record: TNewCourse): string => {
  return record.shortTitle?.toString() || String(record.id);
};
