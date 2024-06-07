import { SortOrder } from "../../util/SortOrder";

export type AwardOrderByInput = {
  awardDate?: SortOrder;
  awardName?: SortOrder;
  id?: SortOrder;
  pending?: SortOrder;
  student_id?: SortOrder;
};
