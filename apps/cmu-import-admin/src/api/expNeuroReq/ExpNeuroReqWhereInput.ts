import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type ExpNeuroReqWhereInput = {
  complete?: BooleanNullableFilter;
  date?: DateTimeFilter;
  departmentCode?: StringNullableFilter;
  id?: IntFilter;
  pending?: BooleanNullableFilter;
  studentData?: StudentDatumWhereUniqueInput;
};
