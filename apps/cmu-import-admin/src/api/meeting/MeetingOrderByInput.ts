import { SortOrder } from "../../util/SortOrder";

export type MeetingOrderByInput = {
  adminVisible?: SortOrder;
  department?: SortOrder;
  end?: SortOrder;
  facultyVisible?: SortOrder;
  id?: SortOrder;
  longDescription?: SortOrder;
  shortDescription?: SortOrder;
  start?: SortOrder;
};
