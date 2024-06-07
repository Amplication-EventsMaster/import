import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type CommitteeServiceWhereInput = {
  committeeName?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  id?: IntFilter;
  startDate?: DateTimeNullableFilter;
  studentData?: StudentDatumWhereUniqueInput;
};
