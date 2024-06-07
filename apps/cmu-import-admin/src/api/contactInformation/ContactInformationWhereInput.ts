import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";

export type ContactInformationWhereInput = {
  address1?: StringNullableFilter;
  address2?: StringNullableFilter;
  city?: StringNullableFilter;
  country?: StringNullableFilter;
  id?: IntFilter;
  phone?: StringNullableFilter;
  state?: StringNullableFilter;
  studentId?: IntFilter;
  zip?: StringNullableFilter;
};
