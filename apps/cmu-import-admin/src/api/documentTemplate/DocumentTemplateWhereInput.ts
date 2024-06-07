import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";

export type DocumentTemplateWhereInput = {
  department?: StringFilter;
  description?: StringNullableFilter;
  documentType?: StringFilter;
  id?: IntFilter;
  identifier?: StringNullableFilter;
  performanceCode?: StringNullableFilter;
  shortDesc?: StringNullableFilter;
  sortOrder?: IntFilter;
};
