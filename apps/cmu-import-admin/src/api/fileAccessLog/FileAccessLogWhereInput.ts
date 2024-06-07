import { IntNullableFilter } from "../../util/IntNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type FileAccessLogWhereInput = {
  facultyId?: IntNullableFilter;
  id?: IntFilter;
  sfId?: IntNullableFilter;
  time?: DateTimeNullableFilter;
};
