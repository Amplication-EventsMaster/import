import { SortOrder } from "../../util/SortOrder";

export type EventScheduleOrderByInput = {
  always?: SortOrder;
  canceled?: SortOrder;
  department?: SortOrder;
  endDate?: SortOrder;
  eventType?: SortOrder;
  id?: SortOrder;
  startDate?: SortOrder;
};
