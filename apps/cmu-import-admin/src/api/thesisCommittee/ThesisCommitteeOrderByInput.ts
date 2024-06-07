import { SortOrder } from "../../util/SortOrder";

export type ThesisCommitteeOrderByInput = {
  committeeRole?: SortOrder;
  facultyId?: SortOrder;
  id?: SortOrder;
  pending?: SortOrder;
  student_id?: SortOrder;
  thesisType?: SortOrder;
};
