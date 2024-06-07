import { SortOrder } from "../../util/SortOrder";

export type LegacyRequirementOrderByInput = {
  course?: SortOrder;
  id?: SortOrder;
  requirementTitle?: SortOrder;
  requirementType?: SortOrder;
  student_id?: SortOrder;
};
