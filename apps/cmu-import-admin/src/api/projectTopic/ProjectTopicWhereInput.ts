import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type ProjectTopicWhereInput = {
  area?: StringNullableFilter;
  clientName?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  id?: IntFilter;
  notes?: StringNullableFilter;
  studentData?: StudentDatumWhereUniqueInput;
  teamName?: StringNullableFilter;
  title?: StringNullableFilter;
};
