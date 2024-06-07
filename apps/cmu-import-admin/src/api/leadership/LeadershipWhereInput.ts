import { IntFilter } from "../../util/IntFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type LeadershipWhereInput = {
  id?: IntFilter;
  leadershipOther?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
  studentId?: IntFilter;
  title?: StringNullableFilter;
};
