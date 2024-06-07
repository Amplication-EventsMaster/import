import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";

export type PsyProjectReqWhereInput = {
  complete?: BooleanNullableFilter;
  date?: DateTimeFilter;
  id?: IntFilter;
  pending?: BooleanNullableFilter;
  studentId?: IntFilter;
  title?: StringFilter;
};
