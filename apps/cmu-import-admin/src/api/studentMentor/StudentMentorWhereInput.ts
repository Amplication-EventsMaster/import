import { IntFilter } from "../../util/IntFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type StudentMentorWhereInput = {
  consultant?: IntFilter;
  current?: IntFilter;
  endDate?: DateTimeNullableFilter;
  facultyId?: IntFilter;
  id?: IntFilter;
  startDate?: DateTimeNullableFilter;
  studentData?: StudentDatumWhereUniqueInput;
};
