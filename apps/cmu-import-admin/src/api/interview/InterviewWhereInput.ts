import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type InterviewWhereInput = {
  date?: DateTimeNullableFilter;
  employer?: StringNullableFilter;
  id?: IntFilter;
  studentData?: StudentDatumWhereUniqueInput;
  typeField?: StringNullableFilter;
};
