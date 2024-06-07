import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type FacultyDatumWhereInput = {
  department?: StringNullableFilter;
  id?: IntFilter;
  institutesId?: StringNullableFilter;
  institutesName?: StringNullableFilter;
  institution?: StringNullableFilter;
  institutionAbbr?: StringNullableFilter;
  status?: StringNullableFilter;
  title?: StringNullableFilter;
  urId?: IntNullableFilter;
};
