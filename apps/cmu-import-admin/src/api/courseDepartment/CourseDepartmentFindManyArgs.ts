import { CourseDepartmentWhereInput } from "./CourseDepartmentWhereInput";
import { CourseDepartmentOrderByInput } from "./CourseDepartmentOrderByInput";

export type CourseDepartmentFindManyArgs = {
  where?: CourseDepartmentWhereInput;
  orderBy?: Array<CourseDepartmentOrderByInput>;
  skip?: number;
  take?: number;
};
