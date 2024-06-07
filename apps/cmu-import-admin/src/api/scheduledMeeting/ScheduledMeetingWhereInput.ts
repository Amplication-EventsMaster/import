import { IntFilter } from "../../util/IntFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";

export type ScheduledMeetingWhereInput = {
  agendaId?: IntFilter;
  alwaysVisible?: BooleanFilter;
  department?: StringFilter;
  endDate?: DateTimeFilter;
  id?: IntFilter;
  startDate?: DateTimeFilter;
};
