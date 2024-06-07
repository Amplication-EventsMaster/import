import { SortOrder } from "../../util/SortOrder";

export type InstitutionOrderByInput = {
  city?: SortOrder;
  code?: SortOrder;
  country?: SortOrder;
  countryCode?: SortOrder;
  id?: SortOrder;
  institution?: SortOrder;
  institutionAbbr?: SortOrder;
  institutionAscii?: SortOrder;
  state?: SortOrder;
  url?: SortOrder;
};
