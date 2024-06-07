import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type ProgramStatusWhereInput = {
  date?: DateTimeNullableFilter;
  id?: IntFilter;
  status?: StringNullableFilter;
  studentData?: StudentDatumWhereUniqueInput;
};
