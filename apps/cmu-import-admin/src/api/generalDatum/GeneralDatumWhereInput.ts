import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type GeneralDatumWhereInput = {
  date?: DateTimeNullableFilter;
  date2?: DateTimeNullableFilter;
  id?: IntFilter;
  studentData?: StudentDatumWhereUniqueInput;
  text?: StringNullableFilter;
  val?: StringNullableFilter;
  val2?: StringNullableFilter;
};
