import { SortOrder } from "../../util/SortOrder";

export type StudentDocumentPartOrderByInput = {
  documentId?: SortOrder;
  id?: SortOrder;
  isDefault?: SortOrder;
  templatePartId?: SortOrder;
  text?: SortOrder;
};
