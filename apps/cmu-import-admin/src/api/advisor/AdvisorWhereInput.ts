import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { StudentDatumWhereUniqueInput } from "../studentDatum/StudentDatumWhereUniqueInput";

export type AdvisorWhereInput = {
  date?: DateTimeFilter;
  facultyId?: IntNullableFilter;
  id?: IntFilter;
  studentData?: StudentDatumWhereUniqueInput;
};
