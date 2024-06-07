import { BooleanFilter } from "../../util/BooleanFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type StudentAdvisorWhereInput = {
  consultant?: BooleanFilter;
  current?: BooleanFilter;
  endDate?: DateTimeFilter;
  facultyId?: IntFilter;
  id?: IntFilter;
  startDate?: DateTimeNullableFilter;
  studentData?: StudentDatumWhereUniqueInput;
};
