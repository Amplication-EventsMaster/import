import { SortOrder } from "../../util/SortOrder";

export type StudentFileOrderByInput = {
  fileChanges?: SortOrder;
  fileDate?: SortOrder;
  fileDesc?: SortOrder;
  fileName?: SortOrder;
  fileType?: SortOrder;
  id?: SortOrder;
  student_id?: SortOrder;
};
