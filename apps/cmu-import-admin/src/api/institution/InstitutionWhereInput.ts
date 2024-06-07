import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";

export type InstitutionWhereInput = {
  city?: StringNullableFilter;
  code?: StringNullableFilter;
  country?: StringNullableFilter;
  countryCode?: StringNullableFilter;
  id?: IntFilter;
  institution?: StringNullableFilter;
  institutionAbbr?: StringNullableFilter;
  institutionAscii?: StringNullableFilter;
  state?: StringNullableFilter;
  url?: StringNullableFilter;
};
