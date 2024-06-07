import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type RotationWhereInput = {
  comment?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  facultyId?: IntFilter;
  id?: IntFilter;
  sfId?: IntNullableFilter;
  startDate?: DateTimeNullableFilter;
  studentData?: StudentDatumWhereUniqueInput;
};
