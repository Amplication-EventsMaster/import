import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type PracticumWhereInput = {
  date?: DateTimeNullableFilter;
  id?: IntFilter;
  pracType?: StringNullableFilter;
  studentData?: StudentDatumWhereUniqueInput;
  title?: StringNullableFilter;
};
