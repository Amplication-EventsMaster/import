import { SortOrder } from "../../util/SortOrder";

export type StudentDataMlOrderByInput = {
  id?: SortOrder;
  origDepartment?: SortOrder;
  overrideCore?: SortOrder;
  overrideElectives?: SortOrder;
  student_id?: SortOrder;
};
