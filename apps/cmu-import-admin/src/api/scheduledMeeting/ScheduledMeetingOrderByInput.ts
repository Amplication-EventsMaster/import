import { SortOrder } from "../../util/SortOrder";

export type ScheduledMeetingOrderByInput = {
  agendaId?: SortOrder;
  alwaysVisible?: SortOrder;
  department?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  startDate?: SortOrder;
};
