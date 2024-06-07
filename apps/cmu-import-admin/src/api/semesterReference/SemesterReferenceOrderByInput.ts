import { SortOrder } from "../../util/SortOrder";

export type SemesterReferenceOrderByInput = {
  id?: SortOrder;
  optional?: SortOrder;
  refAbbrev?: SortOrder;
  refDay?: SortOrder;
  refMonth?: SortOrder;
  refName?: SortOrder;
  rprefId?: SortOrder;
};
