import { SortOrder } from "../../util/SortOrder";

export type ThesisTopicOrderByInput = {
  date?: SortOrder;
  defenseComplete?: SortOrder;
  defenseDate?: SortOrder;
  defensePending?: SortOrder;
  defenseTitle?: SortOrder;
  id?: SortOrder;
  pending?: SortOrder;
  proposalComplete?: SortOrder;
  student_id?: SortOrder;
  title?: SortOrder;
};
