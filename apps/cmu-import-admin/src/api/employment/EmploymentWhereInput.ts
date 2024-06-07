import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type EmploymentWhereInput = {
  address1?: StringNullableFilter;
  address2?: StringNullableFilter;
  city?: StringNullableFilter;
  country?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  employer?: StringNullableFilter;
  id?: IntFilter;
  phone?: StringNullableFilter;
  state?: StringNullableFilter;
  studentData?: StudentDatumWhereUniqueInput;
  typeField?: StringNullableFilter;
  zip?: StringNullableFilter;
};
