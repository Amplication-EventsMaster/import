import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type TeachingReqWhereInput = {
  complete?: BooleanNullableFilter;
  courseNum?: StringNullableFilter;
  courseSection?: StringNullableFilter;
  date?: DateTimeFilter;
  departmentCode?: StringNullableFilter;
  id?: IntFilter;
  pending?: BooleanNullableFilter;
  status?: StringNullableFilter;
  studentData?: StudentDatumWhereUniqueInput;
  title?: StringNullableFilter;
  units?: StringNullableFilter;
};
