import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { IntFilter } from "../../util/IntFilter";

export type AdvisorsCopyWhereInput = {
  date?: DateTimeFilter;
  facultyId?: IntNullableFilter;
  id?: IntFilter;
  studentId?: IntFilter;
};
