import { StudentCourseWhereInput } from "./StudentCourseWhereInput";
import { StudentCourseOrderByInput } from "./StudentCourseOrderByInput";

export type StudentCourseFindManyArgs = {
  where?: StudentCourseWhereInput;
  orderBy?: Array<StudentCourseOrderByInput>;
  skip?: number;
  take?: number;
};
