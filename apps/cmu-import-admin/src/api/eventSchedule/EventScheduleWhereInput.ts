import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntFilter } from "../../util/IntFilter";

export type EventScheduleWhereInput = {
  always?: IntNullableFilter;
  canceled?: IntNullableFilter;
  department?: StringFilter;
  endDate?: DateTimeNullableFilter;
  eventType?: StringFilter;
  id?: IntFilter;
  startDate?: DateTimeNullableFilter;
};
