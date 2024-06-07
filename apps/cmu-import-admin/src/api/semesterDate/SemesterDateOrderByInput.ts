import { SortOrder } from "../../util/SortOrder";

export type SemesterDateOrderByInput = {
  department?: SortOrder;
  disabled?: SortOrder;
  id?: SortOrder;
  semrefId?: SortOrder;
  startDay?: SortOrder;
  startMonth?: SortOrder;
};
