import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type StudentInstituteWhereInput = {
  degree?: StringNullableFilter;
  id?: IntFilter;
  institutesAbbr?: StringNullableFilter;
  institutesId?: StringNullableFilter;
  institutesName?: StringNullableFilter;
  institutesText?: StringNullableFilter;
  irank?: IntNullableFilter;
  major?: StringNullableFilter;
  studentData?: StudentDatumWhereUniqueInput;
};
