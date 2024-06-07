import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";

export type DocumentTemplatePartWhereInput = {
  advisorHide?: IntNullableFilter;
  defaultText?: StringNullableFilter;
  id?: IntFilter;
  keepWithNext?: IntFilter;
  partOrder?: IntFilter;
  templateId?: IntFilter;
  typeField?: StringFilter;
};
