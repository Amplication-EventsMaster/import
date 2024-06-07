import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type StudentPubWhereInput = {
  authors?: StringNullableFilter;
  citation?: StringNullableFilter;
  forum?: StringNullableFilter;
  id?: IntFilter;
  pubDate?: DateTimeNullableFilter;
  sfId?: IntNullableFilter;
  status?: StringNullableFilter;
  studentData?: StudentDatumWhereUniqueInput;
  title?: StringNullableFilter;
  url?: StringNullableFilter;
};
