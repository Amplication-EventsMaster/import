import { NewCourseWhereInput } from "./NewCourseWhereInput";
import { NewCourseOrderByInput } from "./NewCourseOrderByInput";

export type NewCourseFindManyArgs = {
  where?: NewCourseWhereInput;
  orderBy?: Array<NewCourseOrderByInput>;
  skip?: number;
  take?: number;
};
