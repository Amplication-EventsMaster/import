import { IntFilter } from "../../util/IntFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type StudentDocumentPartWhereInput = {
  documentId?: IntFilter;
  id?: IntFilter;
  isDefault?: IntNullableFilter;
  templatePartId?: IntFilter;
  text?: StringNullableFilter;
};
