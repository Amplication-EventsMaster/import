import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type InternshipWhereInput = {
  company?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  id?: IntFilter;
  pending?: BooleanNullableFilter;
  startDate?: DateTimeNullableFilter;
  studentData?: StudentDatumWhereUniqueInput;
};
