import { SortOrder } from "../../util/SortOrder";

export type ContactInformationOrderByInput = {
  address1?: SortOrder;
  address2?: SortOrder;
  city?: SortOrder;
  country?: SortOrder;
  id?: SortOrder;
  phone?: SortOrder;
  state?: SortOrder;
  studentId?: SortOrder;
  zip?: SortOrder;
};
