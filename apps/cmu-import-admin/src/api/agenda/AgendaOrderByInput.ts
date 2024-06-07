import { SortOrder } from "../../util/SortOrder";

export type AgendaOrderByInput = {
  department?: SortOrder;
  id?: SortOrder;
  longDescription?: SortOrder;
  shortDescription?: SortOrder;
};
